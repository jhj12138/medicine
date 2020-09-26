<template>
  <div id = "login">
    <div class="login_top">
      <div class="login_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle">登录</div>
    </div>
    <div class="login_con">
      <div class="login_cons">
        <div class="login_con_tit">欢迎登录</div>
        <div class="login_con_input">
          <div class="login_con_name">昵称</div>
          <div class="login_con_inputs">
            <input type="text" placeholder="请输入昵称" v-model="UserName">
          </div>
        </div>
        <div class="login_con_input">
          <div class="login_con_name">密码</div>
          <div class="login_con_inputs">
            <form>
              <input type="password" placeholder="请输入密码" v-model="UserPwd" autocomplete="off">
            </form>
          </div>
        </div>
        <div class="login_con_btn" @click="subMit">
          <div class="login_con_btns">立即登录</div>
        </div>
        <div class="login_con_go">
          <div class="login_con_gos">
            <div class="login_con_l" @click="goRegister">立即注册</div>
            <div class="login_con_s"></div>
            <div class="login_con_w" @click="goPass">忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../../api/register'
import { Toast } from 'vant';
import {ObtainCid,exhibitionGetBsid,ObtainOid} from '../../api/user'
export default {
  data() {
    return{
      UserName: '',
      UserPwd: ''
    }
  },
  methods:{
    goPass(){
      // if(localStorage.getItem('yzhToken')){
        this.$router.push('/retpassword')
        // this.$router.push({path:'/retpassword' || "/"},() => {}, () => {})
      // }
      // this.$router.push('/retpassword').catch(err => err)
      // this.$router.replace({path:'/retpassword'})
    },
    ObtainOid(){
      var data = {
        cid:JSON.parse(sessionStorage.cidInfo).cid,
        bsid:2
      }
      ObtainOid(data).then(res=>{
        if(res.Success){
        sessionStorage.oid = res.Data
        }else{
          Toast(res.Msg)
        }
      })
    },
    goReturn(){
      this.$router.push('/home')
    },
    goRegister(){
      this.$router.push('/register')
    },
    getBsid () {
      exhibitionGetBsid({}).then(res => {
           console.log(res)
        if (res.Success) {
          sessionStorage.bsid = res.Data.Bsid
          // this.getOid()
          this.ObtainOid()

        } else {
          // this.$message.error(res.Msg)
          Toast(res.Msg)
        }
      })
    },
    getCidInfo () {
       var data = {uid: sessionStorage.Uid}
      ObtainCid(data).then(res => {
       console.log(res)
        if (res.Success) {
          sessionStorage.cidInfo = JSON.stringify(res.Data)
          this.ObtainOid()
          // this.$router.push('/home')
        } else {
          // this.$message.error(res.Msg)
          Toast(res.Msg)

        }
      })
    },
    subMit(){
      if(!this.UserName){Toast('请输入用户名');return}
      if(!this.UserPwd){Toast('请输入密码');return}
      const data = {
        UserName :this.UserName,
        UserPwd :this.UserPwd
      }
      login(data).then((res) => {
        console.log(res)
        if(res.Success && res.Msg !== '用户名或密码错误'){
          console.log('res.Data',res.Data)
          localStorage.setItem('yzhToken', res.Data.Token)
          localStorage.setItem('tokenId', res.Data.Id)
          sessionStorage.setItem('Information',res.Data.UserName)
          sessionStorage.Token = res.Data.Token
          sessionStorage.Uid = res.Data.Id
          sessionStorage.Uname = res.Data.UserName
          sessionStorage.IdentityType = res.Data.IdentityType
          sessionStorage.Company = res.Data.Company
          sessionStorage.ContactPerson = res.Data.ContactPerson
          sessionStorage.Phone = res.Data.Phone
          sessionStorage.PosiTion = res.Data.PosiTion
          sessionStorage.Email = res.Data.Email
          this.getCidInfo()
          this.getBsid()
          // this.ObtainOid()
          this.$router.push('/home')
          Toast({
            message: '登录成功',
          });
        }else{
          Toast(res.Msg);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  // background-color: #f5f7fa;
  .login_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    border:1px solid rgba(229,229,229,.5);
    .login_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .login_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .login_con{
    width: 100%;
    height: 100%;
    .login_cons{
      width: 100%;
      position: relative;
      left: 50%;
      top:48%;
      transform: translate(-50%,-50%);
      .login_con_tit{
        font-size: 28px;
        font-weight: bold;
        color: #333333;
        padding: 0 px(45);
        margin-bottom: px(80);
      }
      .login_con_input{
        padding: 0 px(48);
        .login_con_name{
          color: #333333;
          font-size: 16px;
        }
        .login_con_inputs{
          height: px(78);
          border-bottom: 1px solid rgba(229,229,229,1);
          display: flex;
          align-items: center;
          margin-top: px(10);
          margin-bottom: px(30);
          input{
            border: none;
            font-size: 16px;
          }
        }
      }
      .login_con_btn{
        width:100%;
        height: px(90);
        display: flex;
        align-items: center;
        justify-content: center;
        color:rgba(255,255,255,1);
        margin-top: px(52);
        .login_con_btns{
          background: #2B75D9;
          width: px(686);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: px(45);
          font-size: 16px;
        }
      }
      .login_con_go{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: px(40);
        .login_con_gos{
          display: flex;
          align-items: center;
          font-size: 16px;
          .login_con_l{
            color: #2B75D9;
          }
          .login_con_w{
            color: #999999;
          }
          .login_con_s{
            width: 1px;
            height: px(30);
            background: rgba(160,160,160,1);
            margin:0 px(35)
          }
        }
      }
    }
  }
}
</style>