<template>
  <div id = "register">
    <div class="register_top">
      <div class="register_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="register_middle">注册</div>
    </div>
    <div class="register_con">
      <div class="login_con_input">
        <div class="login_con_name">昵称</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入昵称">
        </div>
      </div>
      <div class="login_con_input">
        <div class="login_con_name">联系电话</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入联系电话">
        </div>
      </div>
      <div class="login_con_input">
          <div class="login_con_name">验证码</div>
          <div class="login_con_inputs">
            <input type="text" placeholder="请输入验证码">
            <div class="getcode_box" @click="getCodeMethod">
              <div :class="[getCodeFlag?'getcode_text': 'getcode_text_else']">{{getCodeText}}</div>
            </div>
          </div>
        </div>
      <div class="login_con_input">
        <div class="login_con_name">确认密码</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入确认密码">
        </div>
      </div>
      <div class="login_con_input">
        <div class="login_con_name">所属公司</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入所属公司">
        </div>
      </div>
      <div class="login_con_input">
        <div class="login_con_name">联系人姓名</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入联系人姓名">
        </div>
      </div>
      <div class="login_con_input">
        <div class="login_con_name">电子邮件</div>
        <div class="login_con_inputs">
          <input type="text" placeholder="请输入电子邮件">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      getCodeFlag:true,
      getCodeText: '获取验证码',
      times: 60,
    }
  },
  methods:{
    // 获得验证码
    getCodeMethod() {
      if (!this.getCodeFlag) return; //验证码倒计时是否完成
      this.getCodeText = `${this.times}s重新获取`
      this.getCodeFlag = false
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
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#register{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  .register_top{
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
    .register_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .register_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .register_con{
    margin-top: px(130);
    .login_con_input{
        padding: 0 px(48);
        margin-top: px(30);
        .login_con_name{
          color: #333333;
          font-size: 16px;
        }
        .login_con_inputs{
          height: px(78);
          border-bottom: 1px solid rgba(229,229,229,1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: px(30);
          >input{
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

</style>