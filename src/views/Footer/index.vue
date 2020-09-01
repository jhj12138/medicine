<template>
  <div id = "footer">
    <!-- <img src="../../assets/image/footer.png" alt=""> -->
    <div class="footer_con">
      <div class="footer_tit">联系我们</div>
      <div class="footer_phone">{{Tel}}</div>
      <div class="footer_l">
        <span>网站维护：{{Maintain}}</span>
        <span>联系方式：{{ContactWay}}</span>
      </div>
      <div class="footer_l2">
        <span>友情链接：</span>
        <span v-for="(item,index) in footList" :key = "index" class="footer_span"
        @click="goHref(item.LinkUrl)">
          <span>{{item.ImgUrl}}</span>
          <span class="footer_border"></span>
        </span>
        <!-- <span>浙江省医疗卫生国际合作发展中心</span>
        <span class="footer_border"></span>
        <span>浙江省科技厅</span>
        <span class="footer_border"></span>
        <span>浙江省对外科学技术交流中心</span>
        <span class="footer_border"></span>
        <span>浙江基层医疗装备展览会</span>
        <span class="footer_border"></span>
        <span>浙江政府采购网 </span>
        <span class="footer_border"></span>
        <span>浙江省健康服务促进会</span>                               -->
      </div>
      <div class="footer_bottom">
        <div class="footer_bottom_left">备案序号 浙ICP备10046040-1号</div>
        <div class="footer_bottom_right">技术支持：翰臣科技</div>
    </div>
    </div>
  </div>
</template>

<script>
import {honeContact,homeLinks} from '../../api/home'
export default {
  data() {
    return {
      ContactWay:null,
      Maintain:null,
      Tel:null,
      footList:null,
    }
  },
  methods:{
    honeContact(){
      honeContact().then((res) => {
        if (res.Success){
          console.log(res)
          this.ContactWay = res.Data.ContactWay
          this.Maintain = res.Data.Maintain
          this.Tel = res.Data.Tel
        } else {
          Toast(res.Msg)
        }
      })
    },
    homeLinks(){
      homeLinks().then((res) => {
        if (res.Success){
          console.log(res)
          this.footList = res.Data
        } else {
          Toast(res.Msg)
        }
      })
    },
    goHref(hrefs){
      window.location.href = hrefs
    }
  },
  mounted() {
    this.honeContact()
    this.homeLinks()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#footer{
  width: 100%;
  background: url('../../assets/image/footer.png') center no-repeat;
  position: relative;
  .footer_con{
    color: #fff;
    width: 100%;
    height: 100%;
    .footer_tit{
      padding:px(60) px(22) px(29);
      // padding:0 px(22);
      font-size: 16px;
      font-weight: bold;
    }
    .footer_phone{
      margin-bottom: px(30);
      padding:0 px(22);
      font-size: 22px;
      font-weight: bold;
    }
    .footer_l{
      padding:0 px(22);
      font-size: 12px;
      display: flex;
      flex-direction: column;
      line-height: 1;
      color: rgba(255,255,255,.5);
      span:nth-child(1){
        margin-bottom: px(14);
      }
    }
    .footer_l2{
      padding:0 px(22);
      font-size: 12px;
      line-height: 2.4;
      color: rgba(255,255,255,.5);
      margin:px(40) 0;
      .footer_span:last-child{
        .footer_border{
          width: 0px;
        }
      }
      .footer_border{
        display: inline-block;
        height: 10px;
        width: 1px;
        background: rgba(255,255,255,.5);
        margin:0 px(10);
      }
    }
    .footer_bottom{
      display: flex;
      // position: absolute;
      font-size: 12px;
      padding:0 px(22);
      height: px(58);
      border-top:1px solid  rgba(255,255,255,.5);
      color: rgba(255,255,255,.5);
      align-items: center;
      // flex-direction: row;
      justify-content: space-between;
    }
  }
  // .footer_bottom{
  //     display: flex;
  //     font-size: 12px;
  //     padding:0 px(22);
  //     color: rgba(255,255,255,.5);
  //     // flex-direction: row;
  //     justify-content: space-between;
  //   }
}
</style>