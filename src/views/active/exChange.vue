<template>
  <div id = "exchange">
    <div class="exchange_top">
      <div class="exchange_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="exchange_middle">交流活动</div>
    </div>
    <div class="exchange_con" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
      <div class="exchange_li"
      v-for="(item,index) in tabContents"
      :key="index">
        <div class="exchange_li_left">
          <img :src="item.ImgUrl" alt="">
        </div>
        <div class="exchange_li_right">
          <div class="exchange_li_name">{{item.Title}}</div>
          <div class="exchange_li_address">
            <div class="exchange_address_img">
              <img src="../../assets/image/active_address.png" alt="">
            </div>
            <div class="exchange_address_txt">{{item.Address}}</div>
          </div>
          <div class="exchange_li_time">
            <div class="exchange_time_img">
              <img src="../../assets/image/active_time.png" alt="">
            </div>
            <div class="exchange_time_txt">{{item.ActivityTime}}-{{item.ActivityTimeEnd}}</div>
          </div>
          <div class="exchange_li_btn" @click="goDetail(item.Id)">
            <div class="exchange_li_btns">立即报名</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {getsayli} from '../../api/home'
export default {
  data() {
    return {
      CurPage:0,
      PageSize:5,
      busy: false,
      tabContents:[]
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/home')
    },
    goDetail(ids) {
      this.$router.push({ path: '/acdetails', query: { Id: ids} })
    },
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize
      }
      getsayli(data).then((res) => {
        this.busy = false
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              ele.ImgUrl = 'https://www.zjylz.com'+ele.ImgUrl
              ele.ActivityTime = ele.ActivityTime.replace(/-/g,".")
              ele.ActivityTimeEnd = ele.ActivityTimeEnd.replace(/-/g,".")
              this.tabContents.push(ele)
            })
            console.log(res.Data)
          } else {
            this.busy = true
          }
          console.log('this.tabContents',this.tabContents)
        } else {
          Toast(res.Msg)
        }
      })
    },
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#exchange{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .exchange_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .exchange_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .exchange_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .exchange_con{
    margin-top: px(100);
    .exchange_li{
      padding: px(30) px(20);
      border-bottom: 1px solid rgba(38,104,192,.1);
      display: flex;
      .exchange_li_left{
        width: px(310);
        height: px(175);
        border-radius: px(4);
        img{
          width: 100%;
          height: 100%;
          border-radius: px(4);
        }
      }
      .exchange_li_right{
        flex:1;
        display: flex;
        height: px(175);
        flex-direction: column;
        justify-content: space-between;
        margin-left: px(30);
        .exchange_li_name{
          font-weight: bold;
          font-size: 16px;
        }
        .exchange_li_address{
          display: flex;
          align-items: center;
          .exchange_address_img{
            width: px(16);
            height: px(21);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .exchange_address_txt{
            font-size: 14px;
            color: #565656;
            margin-left: px(17);
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
        .exchange_li_time{
          display: flex;
          align-items: center;
          .exchange_time_img{
            width: px(16);
            height: px(21);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .exchange_time_txt{
            font-size: 14px;
            color: #565656;
            margin-left: px(17);
          }
        }
        .exchange_li_btns{
          width: px(140);
          height: px(40);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: px(6);
          color:#fff;
          line-height: 1;
          font-size: 12px;
          background: #2668C0;
        }
      }
    }
  }
}
</style>