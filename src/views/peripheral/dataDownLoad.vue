<template>
  <div id = "dowmLoad">
    <div class="dowmLoad_top">
      <div class="dowmLoad_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="dowmLoad_middle">资料下载</div>
    </div>
    <div class="dowmLoad_con">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500” >
        <li class="dowmLoad_con_li"
        v-for="(item,index) in tabContents" :key = "index"
        @click="goUpda">
          <div class="dowmLoad_li_left">
            <img src="../../assets/image/dowm_img.png" alt="">
          </div>
          <div class="dowmLoad_li_right">
            <div class="dowmLoad_li_time">{{item.ShowDate}}</div>
            <div class="dowmLoad_li_txt">{{item.Title}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {newsList} from '../../api/home'
import { Dialog } from 'vant';
export default {
  data() {
    return{
      busy: false,
      tabContents:[],
      // list:[{},{},{},{},{},{},{},{},{},{}],
      CurPage:0,
      PageSize:10
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/home')
    },
    goUpda() {
      Dialog.alert({
        message: '请转到官网下载',
      }).then(() => {
        // on close
      });
    },
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        classid:13
      }
      newsList(data).then((res) => {
        this.busy = false
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              this.tabContents.push(ele)
            })
          } else {
            this.busy = true
          }
          console.log('this.tabContents',this.tabContents)
        } else {
          Toast(res.Msg)
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#dowmLoad{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .dowmLoad_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .dowmLoad_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .dowmLoad_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .dowmLoad_con{
    ul{
      margin-top: px(100);
      padding: px(30) px(30);
      .dowmLoad_con_li{
        display: flex;
        align-items: center;
        padding: px(40) px(60);
        background: #fff;
        margin-bottom: px(30);
        .dowmLoad_li_left{
          width: px(75);
          margin-right: px(60);
          img{
            width: 100%;
          }
        }
        .dowmLoad_li_right{
          flex:1;
          .dowmLoad_li_time{
            color:#9A9A9A;
            font-size: 14px;
          }
          .dowmLoad_li_txt{
            color:#222222;
            font-size: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
      .dowmLoad_con_li:last-child{
        margin-bottom: 0;
      }
    }
  }
}
</style>