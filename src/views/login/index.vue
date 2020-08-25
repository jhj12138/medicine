<template>
  <div id = "login">
    <div class="login_top">
      <div class="login_return">
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
            <input type="text" placeholder="请输入昵称">
          </div>
        </div>
        <div class="login_con_input">
          <div class="login_con_name">密码</div>
          <div class="login_con_inputs">
            <input type="text" placeholder="请输入密码">
          </div>
        </div>
        <div class="login_con_btn">
          <div class="login_con_btns">立即登录</div>
        </div>
        <div class="login_con_go">
          <div class="login_con_gos">
            <div class="login_con_l">立即注册</div>
            <div class="login_con_s"></div>
            <div class="login_con_w" @click="goPass">忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    goPass(){
      this.$router.push('/retpassword')
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
          >input{
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