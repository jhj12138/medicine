<template>
  <div id = "highIevel">
    <div class="highIevel_top">
      <div class="highIevel_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="highIevel_middle">高层次人才服务</div>
    </div>
    <div class="highIevel_con">
      <div class="highIevel_li">
        <div class="highIevel_li_left">
          <img src="../../assets/image/fore_img.png" alt="">
        </div>
        <div class="highIevel_li_right">
          <div class="highIevel_li_tit">资深研究员</div>
          <div class="highIevel_li_name">徐平一</div>
          <div class="highIevel_li_main">个人简短自我介绍个人简短自我介绍个人简短自我介绍个人简短自我介绍个人简短自我介绍个人简短个人简短自我介绍个人简短自我介绍个人简短自我介绍</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
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