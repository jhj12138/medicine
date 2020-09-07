<template>
  <div id = "highIevel">
    <div class="highIevel_top">
      <div class="highIevel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="highIevel_middle">高层次人才服务</div>
    </div>
    <div class="highIevel_con" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
      <div class="highIevel_li" 
      v-for="(item,index) in tabContents"
      :key="index">
        <div class="highIevel_li_left">
          <img :src="item.ImgUrl" alt="">
        </div>
        <div class="highIevel_li_right">
          <div class="highIevel_li_tit">{{item.Position}}</div>
          <div class="highIevel_li_name">{{item.Name}}</div>
          <div class="highIevel_li_main">{{item.Summary}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {intenalTalents} from '../../api/home'
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
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize
      }
      console.log(data)
      intenalTalents(data).then((res) => {
        this.busy = false
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              ele.ImgUrl = 'https://www.zjylz.com'+ele.ImgUrl
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
#highIevel{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background: #fff;
  .highIevel_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .highIevel_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .highIevel_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .highIevel_con{
    margin-top: px(100);
    .highIevel_li{
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid rgba(44,118,217,.1);
      padding:px(30) px(20);
      .highIevel_li_left{
        width: px(310);
        height: px(175);
        border-radius: px(4);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .highIevel_li_right{
        flex:1;
        margin-left: px(30);
        height: px(175);
        .highIevel_li_tit{
          font-size: 12px;
          color: #565656;
        }
        .highIevel_li_name{
          font-size: 16px;
          margin-top: px(10);
        }
        .highIevel_li_main{
          font-size: 12px;
          color: #565656;
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 3;
			    -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>