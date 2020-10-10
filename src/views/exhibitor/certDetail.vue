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
        <input type="text" placeholder="请输入证书名称" v-model="name">
      </div>
      <div class="cert_con_inp">
        <input type="text" placeholder="请输入证书排序" v-model="OrdNum">
      </div>
    </div>
    <div class="cert_update">
      <div class="cert_update_top">请上传商品图片</div>
      <div class="cert_update_main">
        <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
      </div>
    </div>
    <div class="cert_bottom" @click="tijao">确定</div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import{EditCertificate,getObtainCertificate,uploadimg,ADDCertificate} from "../../api/home"
export default {
  data() {
    return{
      fileList: [{url:""}],
      content:"",
      imgurl:"",
      name:"",
      OrdNum:"",
    }
  },
  mounted(){
    this.getquery()
  },
  methods:{
    getquery(){
      this.content = this.$route.query
        console.log(this.content.flag)
      if(this.content.flag == "true"){
        var data = {
          cid:JSON.parse(sessionStorage.cidInfo).cid,
          ID:this.content.ID
        }
        // console.log(this.imgurl)
        getObtainCertificate(data).then(res=>{
          this.name = res.Data.Data[this.$route.query.index].name
          this.OrdNum = res.Data.Data[this.$route.query.index].OrdNum
          this.fileList[0].url = "https://www.zjylz.com/" +  res.Data.Data[this.$route.query.index].imgurl.split('&&')[0]
          console.log(res.Data)
          console.log(  this.fileList[0].url )
        })
      }else{
        console.log(11111111)
      }
    },
    tijao(){
      this.content = this.$route.query
      console.log(this.content)
      if(this.content.flag == 'true'){
        var nowtime  = new Date().toLocaleDateString()
        var data = {
          cid:JSON.parse(sessionStorage.cidInfo).cid,
          ID:this.content.ID,
          name:this.name,
          OrdNum:this.OrdNum,
          imgurl:this.fileList[0].url,
        }
        console.log(data)
        EditCertificate(data).then(res=>{
          if(res.Success){
            Toast(res.Msg)
            this.$router.push("/certifcate")
          }else{
            Toast(res.Msg)
          }
        })
      }else{
      var nowtime  = new Date().toLocaleDateString()
      var data = {
          cid:JSON.parse(sessionStorage.cidInfo).cid,
          name:this.name,
          OrdNum:this.OrdNum,
          imgurl:this.imgurl,
        }
        console.log(111)
        ADDCertificate(data).then(res=>{
          if(res.Success){
            Toast(res.Msg)
            this.$router.push('/certifcate')
          }else{
            Toast(res.Msg)
          }
        })  
      }
    },
    goReturn() {
      this.$router.push('/certifcate')
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
       console.log(file);//file文件如下图
// 　　　var formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
// 　　      formData.append('file', file.file); //接口需要传的参数
//           formData.append('FileType','image')
          //  uploadimg
　
      var data = {
        File:file.content,
        FileType:"image"
      }
      console.log(formData)
      uploadimg(formData).then(res=>{
        console.log(res)
      })
      this.imgurl = file.file.name
    
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