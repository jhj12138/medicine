<template>
  <div id ="enterFor">
    <div class="retPass_top">
      <div class="retPass_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="retPass_middle">报名参加</div>
    </div>
    <div class="retPass_con">
      <div class="retPass_cons">
        <div class="retPass_con_input">
          <div class="retPass_con_name">联系人姓名</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入联系人姓名" v-model="ContactPerson">
          </div>
        </div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">身份证号码</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入身份证号码" v-model="IdCard">
          </div>
        </div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">联系电话</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入联系人电话" v-model="Phone">
          </div>
        </div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">验证码</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入验证码" v-model="Code">
            <div class="getcode_box" @click="getCodeMethod">
              <div :class="[getCodeFlag?'getcode_text': 'getcode_text_else']">{{getCodeText}}</div>
            </div>
          </div>
        </div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">电子邮箱</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入电子邮箱" v-model="Email">
          </div>
        </div>
      </div>
    </div>
    <div class="stand_bottoms" @click="goSubmit">
      <div class="stand_bottom">下一步</div>
    </div>
  </div>
</template>

<script>
import {sendMessage} from '../../api/register'
import {OnlineCode,userJoin,userNoLogin} from '../../api/user'
import { Toast } from 'vant';
export default {
  data() {
    return{
      getCodeFlag:true,
      getCodeText: '获取验证码',
      times: 60,
      ContactPerson:'',
      IdCard:'',
      Phone:'',
      Code:'',
      Email:''
    }
  },
  methods:{
    goReturn(){
      this.$router.push('/login')
    },
    // 获得验证码
    getCodeMethod() {
      console.log('111')
      if(!this.Phone) {
        Toast({
          message: '请输入手机号',
        });
        return
      };
      if (!this.getCodeFlag) return; //验证码倒计时是否完成
      this.getCodeText = `${this.times}s重新获取`
      this.getCodeFlag = false
      const data = {
        telephone: this.Phone
      }
      sendMessage(data).then((res) => {
        if (res.Success){
          Toast({
            message: '验证码请在1分钟之内使用',
          });
        } else {
          Toast(res.Msg)
        }
        console.log(res)
      })
      const timer = setInterval(() => {
        if (this.times <= 0) {
          clearInterval(timer)
          this.getCodeText = "获取验证码"
          this.getCodeFlag = true
          this.times = 60
          return
        }
        this.times--
        this.getCodeText = `${this.times}s重新获取`
      }, 1000);
    },
    goSubmit(){
      if(!this.ContactPerson){Toast('请输入联系人姓名');return}
      if(!this.IdCard){Toast('请输入身份证号码');return}
      if(!this.Phone){Toast('请输入联系人电话');return}
      if(!this.Code){Toast('请输入验证码');return}
      if(!this.Email){Toast('请输入电子邮箱');return}
      // if (!(/^1[3456789]\d{9}$/.test(this.Phone))){Toast('联系人电话有误');return} 
      // if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.Email))){Toast('邮箱有误');return}
      // if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.IdCard))){Toast('身份证号有误');return}  
      const data = {
        ContactPerson: this.ContactPerson,
        IdCard: this.IdCard,
        Phone: this.Phone,
        Email: this.Email,
        Code: this.Code
      }
      const isLogin = localStorage.getItem('yzhToken') // 是否token
      console.log('isLogin',isLogin,data)
      if (isLogin) {
        userJoin(data).then((res) => {
          console.log(res)
          if(res.Success){
            Toast({
              message: res.Msg,
            });
            // this.$router.push('/login')
            this.$router.push({ path: '/inraim', query: { Id: res.Data.Id } })
          } else {
            Toast({
              message: res.Msg,
            });
          }
        })
      } else {
        userNoLogin(data).then((res) => {
          console.log(res)
          if(res.Success){
            Toast({
              message: '报名成功',
            });
            // this.$router.push('/inraim')
            this.$router.push({ path: '/inraim', query: { Id: res.Data.Id } })
          } else {
            Toast({
              message: '报名失败',
            });
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#enterFor{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  .retPass_top{
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
    .retPass_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .retPass_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .retPass_con{
    width: 100%;
    height: 100%;
    .retPass_cons{
      margin-top: px(150);
    .retPass_con_input{
      padding: 0 px(48);
      .retPass_con_name{
        color: #333333;
        font-size: 16px;
      }
      .retPass_con_inputs{
        height: px(78);
        border-bottom: 1px solid rgba(229,229,229,1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: px(10);
        margin-bottom: px(30);
        input{
          border: none;
          font-size: 16px;
        }
        .getcode_text{
          font-size:16px;
          color:rgba(64,97,247,1);
          line-height:40rpx;
        }
        .getcode_text_else{
          font-size:16px;
          color:#A2A6B3;
          line-height:40rpx;
        }
      }
    }
    }
  }
  .stand_bottoms{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px(100);
    background: #fff;
    .stand_bottom{
      width: px(710);
      height: px(87);
      position: absolute;
      // bottom: px(12);
      left: 50%;
      transform: translateX(-50%);
      background: #2668C0;
      border-radius: px(6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>