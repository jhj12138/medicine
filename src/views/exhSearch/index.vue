<template>
  <div id="exhSearch">
    <div class="fore_top">
      <div class="fore_return">
        <img src="../../assets/image/mine_return.png" alt=""  @click="returnhome">
      </div>
      <div class="fore_middle">搜索</div>
    </div>
    <div class="fore_up">
      <van-dropdown-menu>
        <van-dropdown-item
          :title="accountName"
          v-model="accountNameValue"
          :options="accountNameOptions"
          @change="toggleAccountName"
          active-color="#1989fa"
        />
        <van-dropdown-item
          :title="licensePlate"
          v-model="licensePlateValue"
          :options="licensePlateOptions"
          @change="toggleLicensePlate"
          active-color="#1989fa"
        />
      </van-dropdown-menu>
    </div>
    <div class="fore_con">
      <div class="fore_con_li"
      v-for="(item,index) in list"
      :key="index"
       @click="goDetail(item.cid)"
      >
        <div class="fore_li_left">
          <img :src="gUrl + imgUrl[index]" alt="">
        </div>
        <div class="fore_li_right">
          <div class="fore_li_top">
            <div class="fore_li_name">{{item.Title}}</div>
            <div class="fore_li_txt">主营产品：{{item.Industryrb}}</div>
            <div class="fore_li_address">公司地址：{{item.address}}</div>
          </div>
          <div class="fore_li_zhan">展位：{{item.number}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getqc} from '../../api/home'
export default {
  data() {
    return {
      accountName: '公司主营产品',
      licensePlate: '公司地区',
      accountNameValue: '',
      licensePlateValue: '',
      accountNameOptions: [
        { text: '放射', value: 0 },
        { text: '内视镜', value: 1 },
        { text: '手术室供应室消杀', value: 2 },
        { text: '综合', value: 3 },
        { text: '综合检验', value: 4 },
        { text: '其他', value: 5 },

      ],
      licensePlateOptions: [
        // { text: '30天以前', value: 0 }, 
        // { text: '7天内', value: 1 },
      ],
      list:[],
      imgUrl:[],
      gUrl:"https://www.zjylz.com/"
    }
  },
  mounted(){
  this.getexhibitors()
  },
  methods: {
    goDetail(ids) {
      this.$router.push({ path: '/exhibitionxq', query: { Id: ids} })
      console.log(1111)
    },
    returnhome(){
       this.$router.push({ path: '/home'})
    },
    //获取展商信息
    getexhibitors(){
      getqc().then(res=>{
        this.list = res.Data.Data
        res.Data.Data.forEach(element => {
          // this.imgUrl = res.Data.Data[0].imgurl
          this.imgUrl.push(element.imgurl.split('&&')[0])
        });
      })
    },
    toggleAccountName(value) {
      this.accountName = this.accountNameOptions[value].text
      this.accountNameValue = value
    },
    toggleLicensePlate(value) {
      this.licensePlate = this.licensePlateOptions[value].text
      this.licensePlateValue = value
    }
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#exhSearch{
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
    width: 100%;
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
          // white-space: nowrap;
          // text-overflow: ellipsis;
          // overflow: hidden;
          font-size: 14px;
          color: rgba(34,34,34,1);
          font-weight: bold;
          line-height: 1;
        }
        .fore_li_txt{
          margin-top:px(14);
          line-height: 1.2;
          font-size: 12px;
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
          color: #565656;
        }
        .fore_li_address{
          margin-top:px(5);
          font-size: 12px;
          line-height: 1;
          color: #565656;
          overflow:hidden; 
          text-overflow:ellipsis;
          display:-webkit-box; 
          -webkit-box-orient:vertical;
          -webkit-line-clamp:3; 
        }
        .fore_li_zhan{
          font-size: 12px;
          line-height: 1;
          color: #565656;
        }
      }
    }
  }
}
</style>