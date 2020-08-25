<template>
  <div id = "purtrans">
    <div class="purtrans_top">
      <div class="purtrans_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="purtrans_middle">采购交易</div>
    </div>
    <div class="purtrans_con">
      <div class="purtrans_li">
        <div class="purtrans_li_left">采购交易标题</div>
        <div class="purtrans_li_right">2020.10.12 12:00.06</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{

    }
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
      }
      .purtrans_li_right{
        color: #9A9A9A;
      }
    }
  }
}
</style>