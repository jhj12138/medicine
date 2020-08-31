<template>
  <div id = "header" :class="headFlag?'header_in':''">
    <div @click="close">关闭</div>
    <ul>
      <li><span>首页</span></li>
      <li>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="新闻中心" name="1">
            <div class="header_li">
              <p>展会动态</p>
              <p>国际合作</p>
              <p>学术论坛</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="展会服务" name="2">
            <div class="header_li">
              <p>展会介绍</p>
              <p>周边交通</p>
              <p>周边餐饮酒店</p>
              <p>资料下载</p>
              <p>常见问题</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="会议论坛" name="3">
            <div class="header_li">
              <p>线下活动</p>
              <p>云直播</p>
              <p>云对接</p>
            </div>
          </van-collapse-item>
          <van-collapse-item title="科技合作" name="4">
            <div class="header_li">
              <p>国内合作</p>
              <p>国外合作</p>
              <p>高层次人才服务</p>
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
              <p>主题培训</p>
              <p>交流活动</p>
            </div>
          </van-collapse-item>
        </van-collapse>
      </li>
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
    close() {
      this.$emit('changeFlag',false)
      // this.headFlag = false
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
  position: absolute;
  background: #fff;
  right: -100%;
  top: 0;
  z-index: 999;
  ul{
    position: fixed;
    width: 100%;
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