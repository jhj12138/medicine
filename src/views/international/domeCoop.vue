<template>
  <div id="domeCoop">
    <div class="fore_top">
      <div class="fore_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="fore_middle">国内合作</div>
    </div>
    <div class="fore_up">
      <div class="fore_up1">
        <div @click="showPicker1 = true" class="fore_up_val">
          <div class="fore_up_name" :class="showPicker1 == true?'fore_up_color':''">{{value1}}</div>
          <div class="fore_up_img">
            <img src="../../assets/image/down_imgs.png" alt="" v-if ='showPicker1 == false' >
            <img src="../../assets/image/up_imgs.png" alt="" v-else>
            <!-- <img :src="showPicker1?'../../assets/image/down_imgs.png':'../../assets/image/up_imgs.png'" alt=""> -->
          </div>
        </div>
        <van-popup v-model="showPicker1" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns1"
            @cancel="showPicker1 = false"
            @confirm="onConfirm1"
          />
        </van-popup>
      </div>
      <div class="fore_up1">
        <div @click="showPicker2 = true" class="fore_up_val">
          <div class="fore_up_name" :class="showPicker2 == true?'fore_up_color':''">{{value2}}</div>
          <div class="fore_up_img">
            <img src="../../assets/image/down_imgs.png" alt="" v-if ='showPicker2 == false' >
            <img src="../../assets/image/up_imgs.png" alt="" v-else>
            <!-- <img :src="showPicker1?'../../assets/image/down_imgs.png':'../../assets/image/up_imgs.png'" alt=""> -->
          </div>
        </div>
        <van-popup v-model="showPicker2" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns2"
            @cancel="showPicker2 = false"
            @confirm="onConfirm2"
          />
        </van-popup>
      </div>
    </div>
    <div class="fore_con" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
      <div class="fore_con_li"
      v-for="(item,index) in tabContents"
      :key="index"
      @click="goDetail(item.Id)">
        <div class="fore_li_left">
          <img :src="item.ImgUrl" alt="">
        </div>
        <div class="fore_li_right">
          <div class="fore_li_top">
            <div class="fore_li_name">{{item.Title}}</div>
            <div class="fore_li_txt">{{item.Summary}}</div>
          </div>
          <div class="fore_li_time">发布时间：{{item.PubTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { Toast } from 'vant';
import {listDomes,typesDomes} from '../../api/home'
export default {
  data() {
    return {
      value1: '类别选择',
      columns1: ['全部'],
      colu1:[],
      showPicker1: false,
      value2: '发布时间',
      columns2: ['全部','一周内','一个月内'],
      colu2:['',7,30],
      TypeId:null,
      PubTime:null,
      showPicker2: false,
      tabContents:[],
      busy: false,
      CurPage:0,
      PageSize:5,
      list:[{},{},{},{},{},{},{},{},{},],
    }
  },
  methods: {
    onConfirm1(value,index) {
      this.value1 = value;
      if (value == '全部') {
        this.TypeId = null
      } else {
        this.TypeId = this.colu1[index]
      }
      // console.log(index)
      this.showPicker1 = false;
      this.tabContents = []
      this.CurPage = 0
      this.loadMore()
    },
    goDetail(ids) {
      this.$router.push({ path: '/oritails', query: { Id: ids} })
    },
    // this.$router.push({ path: '/news', query: { Id: 9} })
    onConfirm2(value,index) {
      this.value2 = value;
      this.PubTime = this.colu2[index]
      this.showPicker2 = false;
      this.tabContents = []
      this.CurPage = 0
      this.loadMore()
    },
    goReturn() {
      this.$router.push('/home')
    },
    typesAbroad() {
      typesDomes().then((res) => {
        if (res.Success){
          res.Data.forEach(ele => {
            this.colu1.push(ele.Id)
            this.columns1.push(ele.Name)
          })
        } else {
          Toast(res.Msg)
        }
      })
    },
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        TypeId:this.TypeId,
        PubTime:this.PubTime,
      }
      console.log(data)
      listDomes(data).then((res) => {
        this.busy = false
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              ele.ImgUrl = 'https://www.zjylz.com'+ele.ImgUrl
              ele.PubTime = ele.PubTime.slice(0,10)
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
  },
  mounted(){
    this.typesAbroad()
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#domeCoop{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .fore_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .fore_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .fore_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .fore_up{
    // margin-top: px(100);
    position: fixed;
    top:px(100);
    left: 0;
    height: px(100);
    width: 100%;
    display: flex;
    align-items: center;
    background: #f5f7fa;
    .fore_up1{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .fore_up_val{
        display: flex;
        align-items: center;
        .fore_up_img{
          width: px(12);
          height: px(12);
          margin-left: px(20);
          img{width: 100%;height: 100%;}
        }
      }
      .fore_up_color{
        color: #2C76D9;
      }
    }
  }
  .fore_con{
    margin-top: px(200);
    .fore_con_li{
      display: flex;
      align-items: center;
      padding: px(30);
      border-bottom: 1px solid rgba(44,118,217,.1);
      .fore_li_left{
        width: px(310);
        height: px(175);
        border-radius: px(4);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .fore_li_right{
        flex:1;
        margin-left:px(30) ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: px(178);
        .fore_li_name{
          font-size: 16px;
          color: rgba(34,34,34,1);
          font-weight: bold;
          line-height: 1;
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
        }
        .fore_li_txt{
          margin-top:px(14);
          line-height: 1.2;
          font-size: 12px;
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>