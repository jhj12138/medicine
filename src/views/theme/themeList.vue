<template>
  <div id="themeList">
    <div class="fore_top">
      <div class="fore_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="fore_middle">主题培训</div>
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
      <div class="fore_up1">
        <div @click="showPicker3 = true" class="fore_up_val">
          <div class="fore_up_name" :class="showPicker3 == true?'fore_up_color':''">{{value3}}</div>
          <div class="fore_up_img">
            <img src="../../assets/image/down_imgs.png" alt="" v-if ='showPicker3 == false' >
            <img src="../../assets/image/up_imgs.png" alt="" v-else>
            <!-- <img :src="showPicker1?'../../assets/image/down_imgs.png':'../../assets/image/up_imgs.png'" alt=""> -->
          </div>
        </div>
        <van-popup v-model="showPicker3" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns3"
            @cancel="showPicker3 = false"
            @confirm="onConfirm3"
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
          <div class="fore_li_bg"></div>
          <img :src="item.ImgUrl" alt="">
          <div class="fore_li_play" >
            <img src="../../assets/image/video_play.png" alt="">
          </div>
        </div>
        <div class="fore_li_right">
            <div class="fore_li_name">{{item.Title}}</div>
            <div class="fore_li_txt">课程时间：{{item.Time}}分钟</div>
            <div class="fore_li_time">发布时间：{{item.PubTime}}</div>
            <div class="fore_li_jieshao">课程简介：{{item.Summary}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { Toast } from 'vant';
import {listDomes,lessionList,lessionTypes} from '../../api/home'
export default {
  data() {
    return {
      value1: '课程分类',
      columns1: [],
      colu1:[],
      showPicker1: false,
      value2: '课程时间',
      columns2: ['30分钟以内','30分钟-60分钟','60分钟-120分钟','120分钟以上'],
      colu2:[[30],[30,60],[60,120],[120]],
      value3: '发布时间',
      columns3: ['近期发布','30天前'],
      colu3:[7,30],
      showPicker3: false,
      TypeId:null,
      PubTime:null,
      showPicker2: false,
      tabContents:[],
      busy: false,
      CurPage:0,
      PageSize:5,
      MinTime:null,
      MaxTime:null,
    }
  },
  methods: {
    onConfirm1(value,index) {
      this.value1 = value;
      this.TypeId = this.colu1[index]
      // console.log(index)
      this.showPicker1 = false;
      this.tabContents = []
      this.CurPage = 0
      this.loadMore()
    },
    goDetail(ids) {
      this.$router.push({ path: '/hotcourse', query: { Id: ids} })
    },
    // this.$router.push({ path: '/news', query: { Id: 9} })
    onConfirm2(value,index) {
      this.value2 = value;
      this.MinTime = this.colu2[index][0]
      if(this.colu2[index][1]){
        this.MaxTime = this.colu2[index][1]
      }
      this.showPicker2 = false;
      this.tabContents = []
      this.CurPage = 0
      this.loadMore()
    },
    onConfirm3(value,index) {
      this.value3 = value;
      this.PubTime = this.colu3[index]
      this.showPicker3 = false;
      this.tabContents = []
      this.CurPage = 0
      this.loadMore()
    },
    goReturn() {
      this.$router.push('/home')
    },
    typesAbroad() {
      lessionTypes().then((res) => {
        if (res.Success){
          res.Data.forEach(ele => {
            this.colu1.push(ele.Id)
            this.columns1.push(ele.Name)
          })
          // console.log(res)
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
        MinTime:this.MinTime,
        MaxTime:this.MaxTime
      }
      // console.log(data)
      lessionList(data).then((res) => {
        this.busy = false
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              ele.ImgUrl = 'http://yzh.68hanchen.com'+ele.ImgUrl
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
#themeList{
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
        .fore_li_bg{
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: px(4);
          background: rgba(0,0,0,.5);
        }
        width: px(310);
        height: px(175);
        border-radius: px(4);
        position: relative;
        z-index: -1;
        >img{
          width: 100%;
          height: 100%;
          border-radius: px(4);
        }
        .fore_li_play{
          position: absolute;
          left: 50%;
          top:50%;
          transform: translate(-50%,-50%);
          width: px(76);
          height: px(76);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .fore_li_play1{
          z-index: -1;
        }
      }
      .fore_li_right{
        flex:1;
        margin-left:px(30) ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: px(178);
        color: #565656;
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
          margin-top: px(10);
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
        }
        .fore_li_jieshao{
          overflow: hidden;
          text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>