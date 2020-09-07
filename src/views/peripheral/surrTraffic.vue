<template>
  <div id = "surrTra">
    <div class="surrTra_top">
      <div class="surrTra_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="surrTra_middle">周边交通</div>
    </div>
    <div class="surrTra_con">
      <div class="surrTra_con_li" v-for="(item,index) in surrTra_list" :key="index">
        <div class="surrTra_li_top">
          <img :src="item.ImgUrl" alt="">
        </div>
        <div class="surrTra_li_chu">
          <div class="surrTra_li_box">出租车</div>
          <div class="surrTra_chu_txt">{{item.Summary}}</div>
        </div>
        <div class="surrTra_li_di">
          <div class="surrTra_li_box">地铁</div>
          <div class="surrTra_chu_txt">{{item.Title}}</div>
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
      surrTra_list:null
    }
  },
  methods:{
    goReturn(){
      this.$router.push('/home')
    },
    ServiceTraffic() {
      const data = {
        classid:1
      }
      ServiceTraffic(data).then((res) => {
        if (res.Success){
          res.Data.forEach(ele=> {
            ele.ImgUrl = 'https://www.zjylz.com'+ele.ImgUrl
          })
          this.surrTra_list = res.Data
          // console.log('11111',this.tabContents)
        } else {
          Toast(res.Msg)
        }
      })
    }
  },
  mounted() {
    this.ServiceTraffic()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#surrTra{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  // background-color: #f5f7fa;
  .surrTra_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid rgba(44,118,217,.1);
    .surrTra_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .surrTra_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .surrTra_con{
    margin-top: px(100);
    .surrTra_con_li{
      padding: px(30) px(33);
      border-bottom: 1px solid rgba(44,118,217,.1);
      .surrTra_li_top{
        width: px(585);
        img{
          width: 100%;
        }
      }
      .surrTra_li_chu{
        margin-top: px(24);
        .surrTra_li_box{
          width: px(98);
          height: px(40);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3CA062;
          border-radius: px(10);
          color: #fff;
          font-size: 12px;
          margin-bottom: px(18);
          line-height: 1;
        }
        .surrTra_chu_txt{
          color: #565656;
        }
      }
      .surrTra_li_di{
        margin-top: px(24);
        .surrTra_li_box{
          width: px(98);
          height: px(40);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #DE3A00;
          border-radius: px(10);
          color: #fff;
          font-size: 12px;
          margin-bottom: px(18);
          line-height: 1;
        }
        .surrTra_chu_txt{
          color: #565656;
        }
      }
    }
  }
}
</style>