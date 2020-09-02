<template>
  <div id = "caterHotel">
    <div class="caterHotel_top">
      <div class="caterHotel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="caterHotel_middle">周边餐饮酒店</div>
    </div>
    <div class="caterHotel_con">
      <div class="caterHotel_ul">
        <div class="caterHotel_tit">餐饮推荐</div>
        <div class="caterHotel_li" v-for="(item,index) in surrTra_list" :key ='index' >
          <div class="caterHotel_li_left">
            <img src="../../assets/image/fore_img.png" alt="">
          </div>
          <div class="caterHotel_li_right">
            <div class="caterHotel_li_name">{{item.Title}}</div>
            <div class="caterHotel_li_address">{{item.Summary[0]}}</div>
            <div class="caterHotel_li_phone">{{item.Summary[1]}}</div>
            <div class="caterHotel_li_jieshao">介绍：门店介绍菜品美味、门店介绍门店介绍菜品美味、门店介绍门店介绍菜品美味、门店介绍</div>
          </div>
        </div>
      </div>
      <div class="caterHotel_ul">
        <div class="caterHotel_tit">酒店推荐</div>
        <div class="caterHotel_li" v-for="(item,index) in surrTra_list2" :key ='index' >
          <div class="caterHotel_li_left">
            <img src="../../assets/image/fore_img.png" alt="">
          </div>
          <div class="caterHotel_li_right">
            <div class="caterHotel_li_name">{{item.Title}}</div>
            <div class="caterHotel_li_address">{{item.Summary[0]}}</div>
            <div class="caterHotel_li_phone">{{item.Summary[1]}}</div>
            <div class="caterHotel_li_jieshao">介绍：门店介绍菜品美味、门店介绍门店介绍菜品美味、门店介绍门店介绍菜品美味、门店介绍</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ServiceTraffic} from '../../api/home'
export default {
  data() {
    return{
      surrTra_list:null,
      surrTra_list2:null,
      hotelList:[{
        tit:'餐饮推荐',
        con:[{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"}]
      },{
        tit:'酒店推荐',
        con:[{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"},{name:"重庆美味川菜"}]
      }]
    }
  },
  methods:{
    goReturn(){
      this.$router.push('/home')
    },
    ServiceTraffic() {
      const data = {
        classid:2
      }
      ServiceTraffic(data).then((res) => {
        if (res.Success){
          // res.Data.forEach(ele=> {
          //   ele.Summary = ele.Summary.split("<br>")
          // })
          this.surrTra_list = res.Data
          console.log('11111',this.surrTra_list)
        } else {
          Toast(res.Msg)
        }
      })
    },
    ServiceTraffic2() {
      const data = {
        classid:3
      }
      ServiceTraffic(data).then((res) => {
        if (res.Success){
          res.Data.forEach(ele=> {
            ele.Summary = ele.Summary.split("<br>")
          })
          this.surrTra_list2 = res.Data
          // console.log('11111',this.surrTra_list)
        } else {
          Toast(res.Msg)
        }
      })
    }
  },
  mounted(){
    this.ServiceTraffic()
    this.ServiceTraffic2()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#caterHotel{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .caterHotel_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 99;
    .caterHotel_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .caterHotel_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .caterHotel_con{
    margin-top: px(130);
    .caterHotel_ul{
      margin-bottom: px(30);
      .caterHotel_tit{
        font-size: 16px;
        color: #2C76D9;
        line-height: 1;
        padding: 0 px(20);
      }
      .caterHotel_li{
        display: flex;
        flex-direction: row;
        padding: px(30) px(20);
        border-bottom: 1px solid rgba(44,118,217,.1);
        .caterHotel_li_left{
          width: px(309);
          height: px(175);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .caterHotel_li_right{
          flex:1;
          margin-left: px(34);
          .caterHotel_li_name{
            font-size: 16px;
            font-weight:bold;
            line-height: 1;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
          .caterHotel_li_address{
            margin-top: px(14);
            color: #565656;
            line-height: 1;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .caterHotel_li_phone{
            margin-top: px(14);
            color: #565656;
            line-height: 1;
          }
          .caterHotel_li_jieshao{
            margin-top: px(14);
            color: #565656;
            line-height: 1;
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
}
</style>