<template>
  <div id="foreCoop">
    <div class="fore_top">
      <div class="fore_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="fore_middle">国外合作</div>
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
      :key="index">
        <div class="fore_li_left">
          <img src="../../assets/image/fore_img.png" alt="">
        </div>
        <div class="fore_li_right">
          <div class="fore_li_top">
            <div class="fore_li_name">项目名称</div>
            <div class="fore_li_txt">合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求合作需求</div>
          </div>
          <div class="fore_li_time">发布时间：2020.8.10 12:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountName: '类别选择',
      licensePlate: '发布时间',
      accountNameValue: '',
      licensePlateValue: '',
      accountNameOptions: [
        { text: '类别', value: 0 },
        { text: '类别2', value: 1 },
        { text: '类别3', value: 2 },
      ],
      licensePlateOptions: [
        { text: '30天以前', value: 0 },
        { text: '7天内', value: 1 },
      ],
      list:[{},{},{},{},{},{},{},{},{},],
    }
  },
  methods: {
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
#foreCoop{
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
          font-size: 16px;
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
			    -webkit-line-clamp: 3;
			    -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>