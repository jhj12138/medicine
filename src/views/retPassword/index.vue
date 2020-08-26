<template>
  <div id ="retPassword">
    <div class="retPass_top">
      <div class="retPass_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="retPass_middle">找回密码</div>
    </div>
    <div class="retPass_con">
      <div class="retPass_cons">
        <div class="retPass_con_tit">找回密码</div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">手机号</div>
          <div class="retPass_con_inputs">
            <input type="text" placeholder="请输入手机号" v-model="Phone">
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
          <div class="retPass_con_name">新密码</div>
          <div class="retPass_con_inputs">
            <form>
              <input type="password" placeholder="请输入密码" v-model="NewPwd" autocomplete="off">
            </form>
          </div>
        </div>
        <div class="retPass_con_input">
          <div class="retPass_con_name">确认密码</div>
          <div class="retPass_con_inputs">
            <form>
              <input type="password" placeholder="请输入密码" v-model="NewPwd1" autocomplete="off">
            </form>
          </div>
        </div>
        <div class="retPass_con_btn" @click="submit">
          <div class="retPass_con_btns">立即登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {refund,sendMessage} from '../../api/register'
import { Toast } from 'vant';
export default {
  data() {
    return{
      getCodeFlag:true,
      getCodeText: '获取验证码',
      times: 60,
      Phone:'',
      Code:'',
      NewPwd1:'',
      NewPwd:''
    }
  },
  methods:{
    goReturn(){
      this.$router.push('/login')
    },
    // 获得验证码
    getCodeMethod() {
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
        Toast({
          message: '验证码请在1分钟之内使用',
        });
        console.log(res.data)
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
    submit(){
      if(!this.Phone){Toast('请输入电话号码');return}
      if(!this.NewPwd){Toast('请输入新密码');return}
      if(this.NewPwd != this.NewPwd1){
        Toast('两次密码输入不一致');return
      }
      const data = {
        Phone: this.Phone,
        NewPwd: this.NewPwd,
        Code: this.Code
      }
      refund(data).then((res) => {
        if(res.data.Success){
          Toast({
            message: '修改成功',
          });
          this.$router.push('/home')
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
#retPassword{
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
      width: 100%;
      position: relative;
      left: 50%;
      top:52%;
      transform: translate(-50%,-50%);
      .retPass_con_tit{
        font-size: 28px;
        font-weight: bold;
        color: #333333;
        padding: 0 px(45);
        margin-bottom: px(80);
      }
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
      .retPass_con_btn{
        width:100%;
        height: px(90);
        display: flex;
        align-items: center;
        justify-content: center;
        color:rgba(255,255,255,1);
        margin-top: px(52);
        .retPass_con_btns{
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
      .retPass_con_go{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: px(40);
        .retPass_con_gos{
          display: flex;
          align-items: center;
          font-size: 16px;
          .retPass_con_l{
            color: #2B75D9;
          }
          .retPass_con_w{
            color: #999999;
          }
          .retPass_con_s{
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