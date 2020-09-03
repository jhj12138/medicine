<template>
  <div id="search">
    <div class="fore_top">
      <div class="fore_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="fore_middle">展位搜索列表</div>
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
    <div class="fore_con">
      <div class="fore_con_li"
      v-for="(item,index) in tabContents"
      :key="index"
      @click="goDetail(item.cid)">
        <div class="fore_li_left">
          <img :src="item.imgurl" alt="">
        </div>
        <div class="fore_li_right">
          <div class="fore_li_top">
            <div class="fore_li_name">{{item.Title}}</div>
            <div class="fore_li_changp">主营产品：{{item.Industryrb}}</div>
            <div class="fore_li_address">公司地址：{{item.address}}</div>
          </div>
          <div class="fore_li_time">展位：{{item.number}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { Toast } from 'vant';
import {getqc,getar} from '../../api/home'
export default {
  data() {
    return {
      value1: '行业类型',
      columns1: [],
      colu1:[],
      showPicker1: false,
      value2: '公司地区',
      columns2: ['陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '香港特别行政区', '澳门特别行政区'],
      colu2:['陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '香港特别行政区', '澳门特别行政区'],
      Industryrb:null,
      province:null,
      showPicker2: false,
      tabContents:[],
      CurPage:0,
      PageSize:5,
      key:null,
      list:[{},{},{},{},{},{},{},{},{},],
    }
  },
  methods: {
    onConfirm1(value,index) {
      this.value1 = value;
      this.Industryrb = this.colu1[index]
      // console.log(index)
      this.showPicker1 = false;
      this.tabContents = []
      this.getList()
    },
    goDetail(ids) {
      this.$router.push({ path: '/exhibitionxq', query: { Id: ids} })
    },
    // this.$router.push({ path: '/news', query: { Id: 9} })
    onConfirm2(value,index) {
      this.value2 = value;
      this.province = this.colu2[index]
      this.showPicker2 = false;
      this.tabContents = []
      this.getList()
    },
    goReturn() {
      this.$router.push('/onlinex')
    },
    typesAbroad() {
      getar().then((res) => {
        if (res.Success){
            console.log(res)
          res.Data.forEach(ele => {
            this.colu1.push(ele.lid)
            this.columns1.push(ele.name)
          })
        } else {
          Toast(res.Msg)
        }
      })
    },
    getList() {
        const data ={
            key : this.key,
            Industryrb: this.Industryrb,
            province: this.province
        }
        console.log('daaaaa==',data)
        getqc(data).then((res) => {
            if (res.Success){
                res.Data.Data.forEach(ele=>{
                    ele.imgurl = 'http://yzh.68hanchen.com'+ele.imgurl
                    this.tabContents.push(ele)
                })
                console.log(res)
            } else {
                Toast(res.Msg)
            }
        })
    }
  },
  mounted(){
    this.typesAbroad()
    this.getList()
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#search{
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
        .fore_li_changp{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .fore_li_address{
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