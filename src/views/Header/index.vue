<template>
  <div id = "header" :class="headFlag?'header_in':''">
    <div @click="close($event)" class="header_close">
      <div class="header_closes">
        <img src="../../assets/image/close.png" alt="">
      </div>
    </div>
    <ul>
      <li @click="goHome"><span>首页</span></li>
      <li>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="新闻中心" name="1">
            <div class="header_li">
              <p @click="news1">展会动态</p>
              <p @click="news2">国际合作</p>
              <p @click="news3">学术论坛</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="展会服务" name="2">
            <div class="header_li">
              <p @click="extails">展会介绍</p>
              <p @click="gosurrtraffic">周边交通</p>
              <p @click="caterhotel">周边餐饮酒店</p>
              <p @click="download">资料下载</p>
              <p @click="problem">常见问题</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="会议论坛" name="3">
            <div class="header_li">
              <p @click="offlineactive">线下活动</p>
              <p>云直播</p>
              <p>云对接</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="科技合作" name="4">
            <div class="header_li">
              <p @click="goDomecoop">国内合作</p>
              <p @click="goForecoop">国外合作</p>
              <p @click="goHighleve">高层次人才服务</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="采购交易" name="5">
            <div class="header_li">
              <p>采购信息</p>
              <p>采购专家库</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="培训交流" name="6">
            <div class="header_li">
              <p @click="gothemelist">主题培训</p>
              <p @click="goexchange">交流活动</p>
            </div>
          </van-collapse-item>
        </van-collapse>
      </li>
      <!-- 三个按钮 -->
    <div class="header_btn">
      <div class="header_btn1" @click="goLogin">
        <div class="header_btn_txt">登录</div>
        <div class="header_btn_right">
          <img src="../../assets/image/head_reight.png" alt="">
        </div>
      </div>
      <div class="header_btn2" @click="goRegist">
        <div class="header_btn_txt">个人注册</div>
      </div>
      <div class="header_btn2" @click="goRegist">
        <div class="header_btn_txt">展商注册</div>
      </div>
    </div>
    <!-- 三个按钮 -->
    </ul>
    
  </div>
</template>

<script>
export default {
  props: ['headFlag'],
  data() {
    return {
      activeNames: [],
      activeNames2: [],
    }
  },
  methods:{
    close(event) {
      // event.stopPropagation()
      this.$emit('changeFlag',false)
      // this.headFlag = false
    },
    offlineactive() {
      this.$router.push('/offlineactive')
    },
    gothemelist() {
      this.$router.push('/themelist')
    },
    goLogin() {
      this.$router.push('/login')
    },
    goRegist() {
      this.$router.push('/register')
    },
    download() {
      this.$router.push('/download')
    },
    goForecoop() {
      this.$router.push('/forecoop')
    },
    goDomecoop() {
      this.$router.push('/domecoop')
    },
    goHighleve() {
      this.$router.push('/highievel')
    },
    goexchange() {
      this.$router.push('/exchange')
    },
    goHome () {
      console.log(this.$route.path)
      if (this.$route.path == '/home') {
        this.close()
      } else {
        this.$router.push('/home')
      }
      // this.$router.go(0);
      // this.$router.push('/home')
    },
    gosurrtraffic() {
      this.$router.push('/surrtraffic')
    },
    caterhotel() {
      this.$router.push('/caterhotel')
    },
    problem() {
      this.$router.push('/problem')
    },
    news1() {
      // if (this.$route.path == '/news') {
      //   this.$router.push({ path: '/news', query: { Id: 9} })
      // } else {
      //   this.$router.push('/home')
      // }
      this.$router.push({ path: '/news', query: { Id: 9} })
      if(this.$route.path == '/news') {
        location.reload()
      }
      this.close()
    },
    news2() {
      this.$router.push({ path: '/news', query: { Id: 10} })
      if(this.$route.path == '/news') {
        location.reload()
      }
      this.close()
    },
    news3() {
      this.$router.push({ path: '/news', query: { Id: 12} })
      if(this.$route.path == '/news') {
        location.reload()
      }
      this.close()
    },
    extails() {
      this.$router.push({ path: '/extails'})
    }
  }
}
</script>


<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#header{
  width: 100%;
  height: 100%;
  // position: absolute;
  position: fixed;
  background: #fff;
  right: -100%;
  top: 0;
  z-index: 999;
  overflow: hidden;
  box-sizing: border-box;
  top: 0;
  .header_close{
    display: flex;
    justify-content: flex-end;
    height: 40px;
    padding: px(30) px(30) 0 0 ;
    box-sizing: border-box;
    .header_closes{
      width: px(55);
      height: px(55);
      img{
        width: 100%;
      }
    }
  }
  ul{
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
    height: calc(100% - 40px);
    // overflow-y:scroll ;
    li{
      padding:px(30) 0;
      width: 100%;
      padding: 0 px(50);
      >span{
        font-size: 18px;
        display: block;
        height: 100%;
        line-height: px(100);
        align-items: center;
      }
      .van-collapse{
        // height: 100%;
        .van-collapse-item{
          // height: px(100);
          border-bottom:none;
          .van-cell{
            padding:px(30) 0;
            height: 100%;
            border: none;
            .van-cell__title{
              display: flex;
              align-items: center;
              font-size: 18px;
            }
            .van-cell__right-icon{
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
          .van-collapse-item__title--expanded{
            .van-cell__title{
              >span{
                color:#2b75d8;
              }
            }
          }
          .van-cell::after{
            border-bottom: none;
          }
          .van-collapse-item__wrapper{
            border-bottom: none;
            .van-collapse-item__content{
              // padding: 0;
              .header_li{
                p{
                  height: px(60);
                  color: #323233;
                  font-size: 16px;
                }
              }
            }
          }
          .van-collapse-item--border::after{
            border:none;
          }
        }
      }
    }
  }
  .header_btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 px(30);
    margin-top: px(80);
    .header_btn1{
      display: flex;
      align-items: center;
      width: px(168);
      height: px(70);
      background: #2b75d8;
      border-radius: px(40);
      padding: px(20);
      justify-content: space-between;
      box-sizing: border-box;
      .header_btn_txt{
        font-size: 16px;
        color: #fff;
        padding-left:px(10);
      }
      .header_btn_right{
        width: px(20);
        img{
          width: 100%;
        }
      }
    }
    .header_btn2{
      display: flex;
      align-items: center;
      justify-content: center;
      border:1px solid #222222;
      width: px(168);
      height: px(70);
      border-radius: px(40);
      .header_btn_txt{
        font-size: 16px;
      }
    }
  }
}

.header_in{
  animation: rightIn .5s cubic-bezier(.4,0,.2,1) 0s forwards;
  -webkit-animation: rightIn .5s cubic-bezier(.4,0,.2,1) 0s forwards;
}



@keyframes rightIn {
  0%{
    right: -100%;
  }
  100%{
    right: 0%;
  }
}
</style>