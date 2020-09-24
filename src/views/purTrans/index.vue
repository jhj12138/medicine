<template>
  <div id = "purtrans">
    <div class="purtrans_top">
      <div class="purtrans_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="purtrans_middle">采购交易</div>
    </div>
    <div class="purtrans_con" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
      <div class="purtrans_li"
      v-for="(itemList,index) in tabContents"
      :key = "index">
        <div class="purtrans_li_left">{{itemList.Title}}</div>
        <div class="purtrans_li_right">{{itemList.ShowDate}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {newsList} from '../../api/home'
export default {
  data() {
    return{
      flag: false,
      busy: false,
      CurPage:0,
      PageSize:5,
      tabContents:[],
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/home')
    },
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        classid:11
      }
      console.log(data)
      newsList(data).then((res) => {
        this.busy = false
        console.log('jhjhjhjhj',res)
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
          // this.busy = false
          
            // this.busy = false
          // }, 1000)
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
#purtrans{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .purtrans_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .purtrans_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .purtrans_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .purtrans_con{
    margin-top: px(130);
    padding: 0 px(20);
    .purtrans_li{
      background: #fff;
      width: 100%;
      height: px(88);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 px(20);
      .purtrans_li_left{
        font-size: 16px;
        color: #565656;
        overflow: hidden;
        width: 70%;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .purtrans_li_right{
        color: #9A9A9A;
      }
    }
  }
}
</style>