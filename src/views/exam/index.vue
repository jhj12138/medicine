<template>
  <div id = "exam">
    <div class="login_top">
      <div class="login_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle">疫情防控调查</div>
    </div>
    <div class="ex-top">
        <div class="ex-a">
            <div class="ex-aa">
                <span>国家和地区</span>
                <div>请选择<img src="../../assets/image/ri.png"></div>
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
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.sol{
    border: 1px solid #2B75D9!important;
}
#exam{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .login_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    z-index: 999;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: white;
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
      font-size: px(30);
      font-weight: bold;
    }
  }
  .ex-top{
      margin-top: px(120);
      .ex-a{
          .ex-aa{
              display: flex;
              justify-content: space-between;
              height: px(89);
              padding: 0 6%;
              background-color: white;
              span{
                font-size:px(32);
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:px(89);
              }
              div{
                font-size:px(32);
                font-weight:400;
                color:rgba(170,170,170,1);
                line-height:px(89);
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: px(12);
                    height: px(22);
                    margin-left: px(20);
                }
              }
          }
      }
  }
}
</style>