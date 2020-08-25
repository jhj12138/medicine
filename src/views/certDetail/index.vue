<template>
  <div id = "certDetail">
    <div class="cert_top">
      <div class="cert_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="cert_middle">上传证书</div>
    </div>
    <div class="cert_con">
      <div class="cert_con_inp">
        <input type="text" placeholder="请输入证书名称">
      </div>
      <div class="cert_con_inp">
        <input type="text" placeholder="请输入证书排序">
      </div>
    </div>
    <div class="cert_update">
      <div class="cert_update_top">请上传商品图片</div>
      <div class="cert_update_main">
        <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
      </div>
    </div>
    <div class="cert_bottom">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      fileList: [
       
      ]
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/certifcate')
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#certDetail{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .cert_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: relative;
    background: #fff;
    .cert_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .cert_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .cert_con{
    margin-top: px(42);
    .cert_con_inp{
      height: px(89);
      padding: 0 px(32);
      background: #FFFFFF;
      border-bottom: 1px solid rgba(38,104,192,.1);
      // margin-bottom: px(30);
      input{
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
      }
    }
  }
  .cert_update{
    background: #fff;
    padding:px(40) px(32);
    margin-top: px(32);
    .cert_update_top{
      color:rgba(136,136,136,1);
    }
    .cert_update_main{
      margin-top: px(30);
      .van-uploader{
        width: px(244);
        height: px(156);
        .van-uploader__wrapper{
          height: 100%;
          width: 100%;
          .van-uploader__upload{
            width: 100%;
            height: 100%;
            margin:0;
            background-color:#E9F0F9 ;
          }
          .van-uploader__preview{
            width: 100%;
            height: 100%;
            margin:0;
            .van-uploader__preview-image{
              width: 100%;
              height: 100%;
              img{
                object-fit:fill !important;
              }
            }
          }
        }
        
      }
    }
  }
  .cert_bottom{
    width: px(710);
    height: px(87);
    position: fixed;
    bottom: px(12);
    left: 50%;
    transform: translateX(-50%);
    background: #2668C0;
    border-radius: px(6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
  }
}

</style>