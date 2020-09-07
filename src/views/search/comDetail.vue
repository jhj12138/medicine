<template>
  <div id = "comDetail">
    <div class="comDetail_top">
      <div class="comDetail_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comDetail_middle">展商</div>
    </div>
    <div class="comDetail_con">
      <div class="comDetail_banner">
        <img :src="imgurl" alt="">
      </div>
      <div class="comDetail_main">
        <div class="comDetail_jiage"><span>¥</span><span>{{Price}}</span></div>
        <div class="comDetail_name">
          <div class="comDetail_tit">{{name}}</div>
          <div class="comDetail_name_txt">{{Summary}}</div>
        </div>
        <div class="comDetail_concent">{{content}}</div>
        <div class="comDetail_btn" @click="gosubmit()">立即询价</div>
      </div>
      <!-- <div class="comDetail_store">
        <div class="comDetail_store_tit">店铺推荐</div>
        <div class="comDetail_store_ul">
          <div class="comDetail_store_li">
            <div class="comDetail_store_li_img">
              <img src="../../assets/image/home_hall2.png" alt="">
            </div>
            <div class="comDetail_store_li_txt">UNIQ FD20</div>
          </div>
          <div class="comDetail_store_li">
            <div class="comDetail_store_li_img">
              <img src="../../assets/image/home_hall2.png" alt="">
            </div>
            <div class="comDetail_store_li_txt">UNIQ FD20</div>
          </div>
          <div class="comDetail_store_li">
            <div class="comDetail_store_li_img">
              <img src="../../assets/image/home_hall2.png" alt="">
            </div>
            <div class="comDetail_store_li_txt">UNIQ FD20</div>
          </div>
          <div class="comDetail_store_li">
            <div class="comDetail_store_li_img">
              <img src="../../assets/image/home_hall2.png" alt="">
            </div>
            <div class="comDetail_store_li_txt">UNIQ FD20</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { Toast,Dialog } from 'vant';
import {exhibitorcommoditys} from '../../api/home'
export default {
  data() {
    return {
      CurPage:0,
      PageSize:5,
      busy: false,
      tabContents:[],
      Price:null,
      Summary:null,
      content:null,
      name:null,
      imgurl:null
    }
  },
  methods:{
    gosubmit() {
      Dialog.alert({
        message: '请转到官网询价',
      }).then(() => {
        // on close
      });
    },
    goReturn() {
      this.$router.push('/exhibitionxq')
    },
    exhibitorcommoditys() {
      const data = {
        Pid :this.$route.query.Id
      }
      exhibitorcommoditys(data).then((res) => {
        if (res.Success){
          // res.Data.forEach(ele => {
          //   this.colu1.push(ele.Id)
          //   this.columns1.push(ele.Name)
          // })
          this.Price = res.Data.Price
          this.Summary = res.Data.Summary
          this.name = res.Data.name
          this.imgurl = 'https://www.zjylz.com'+ res.Data.imgurl
          console.log(res)
        } else {
          Toast(res.Msg)
        }
      })
    },
  },
  mounted(){
    this.exhibitorcommoditys()
    console.log(this.$route.query.Id)
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#comDetail{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .comDetail_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .comDetail_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .comDetail_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .comDetail_con{
    margin-top: px(100);
    .comDetail_banner{
      widows: 100%;
      height: px(750);
      img{width: 100%;height: 100%;}
    }
    .comDetail_main{
      padding:px(29) px(30) px(23);
      margin-bottom: px(30);
      background: #fff;
      .comDetail_jiage{
        color: #D93C2C;
        font-weight: bold;
        line-height: 1;
        margin-bottom: px(24);
        span:nth-of-type(2){
          font-size: 18px;
          margin-left: px(5);
        }
      }
      .comDetail_name{
        display: flex;
        align-items: center;
        line-height: 1;
        margin-bottom: px(37);
        .comDetail_tit{
          font-size: 12px;
          padding:px(6) px(10);
          background: #2C76D9;
          border-radius: px(5);
          color: #fff;
        }
        .comDetail_name_txt{
          flex:1;
          margin-left: px(18);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .comDetail_concent{
        font-size: 12px;
        line-height: 1.6;
        color: #888888;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
      }
      .comDetail_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        margin-top: px(30);
        width: 100%;
        height: px(80);
        background: #2668C0;
        border-radius: px(40);
      }
    }
    .comDetail_store{
      padding:px(30);
      .comDetail_store_tit{
        font-size: 16px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: px(22);
      }
      .comDetail_store_ul{
          display: flex;
          align-items: center;
          flex-flow: wrap;
          .comDetail_store_li{
            // flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 32%;
            margin-right: 2%;
            .comDetail_store_li_img{
              width: 100%;
              height: px(213);
              border-radius: 4px;
              img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
              }
            }
            .comDetail_store_li_txt{
              padding:px(21) 0;
              line-height: 1;
            }
          }
          .comDetail_store_li:nth-of-type(3n){
            margin-right: 0;
          }
        }
    }
  }
}
</style>