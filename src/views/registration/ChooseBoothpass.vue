<template>
  <div class="all">
    <div class="header">
      <div class="surrTra_top">
        <div class="surrTra_return" @click="goReturn">
          <img src="../../assets/image/mine_return.png" alt />
        </div>
        <div class="surrTra_middle">展会报名</div>
      </div>
        <div class="Articlesteps">
            <ul class="Articlestepssum">
                <li class="Articlestepssum-li">1</li>
                <li class="Articlestepssum-li">2</li>
                <li class="Articlestepssum-li">3</li>
                <li class="Articlestepssum-li">4</li>
            </ul>
            <ul class="Articlestepstext">
                <li class="Articlestepstext-li">注册信息</li>
                <li class="Articlestepstext-li">选择展位</li>
                <li class="Articlestepstext-li">等待审核</li>
                <li class="Articlestepstext-li">上传凭证</li>
            </ul>
        </div>
        <div class="hx"></div>
        <div class="xx"></div>
        <div class="xx xx1"></div>
    </div>
    <div class="banimgage">
        <img src="../../assets/image/zhanhi3.png" alt="">
        <div class="banimgage-text" v-if="checkStatus==='success'">
            <p>您提交的展商申请资料，已通过审核</p>
            <p href="##" @click="download(url)">请下载展位申请表合同附件</p>
        </div>
        <div class="banimgage-text" v-if="checkStatus==='wait'">
            <p>您已提交了展商申请资料，正在审核中</p>
            <a href="###">申请期间，我们会电话联系您，请留意您的来电...</a>
        </div>
          <div class="banimgage-text" v-if="checkStatus==='failed'">
            <p>您提交的展商申请资料，未通过审核</p>
            <a href="###" @click="uploadht2">请重新填写</a>
        </div>
    </div>
    <div class="stand_bottoms">
        <div class="stand_bottom" @click="goxzzw">下一步</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { exhibitionOrderObtain } from '../../api/user/index';
export default {
  data() {
    return {
      urlParams: 'https://www.zjylz.com',
      active: 1,
      list:[{
        name:111
      }],
      checkStatus:'',
      activeNames: [],
      downloadurl:""
    };
  },
  mounted(){
    this.exhibitionOrderObtain1()//获取订单信息
  },
  methods:{
    uploadht2(){
      this.$router.path('/gsxx')
    },
    fileDownload(url){
      const link = document.createElement('a') // 创建a标签
      link.style.display = 'none' // 使其隐藏
      link.href = url // 赋予文件下载地址
      link.setAttribute('download', '') // 设置下载属性 以及文件名
      document.body.appendChild(link) // a标签插至页面中
      link.click() // 强制触发a标签事件
    },
    //下载
    download(){
       exhibitionOrderObtain({
        oid: sessionStorage.oid
      }).then(res => {
        if (res.Success) {
          var url = this.urlParams + res.Data.Upload.split('&&')[0]
          console.log(url)
          // this.downloadurl = url
          this.fileDownload(url)
        } else {
          this.$message.error(res.Msg)
        }
      })
    },
    //获取订单信息
    exhibitionOrderObtain1(){
      var data = {
        oid:sessionStorage.oid
      }
      exhibitionOrderObtain(data).then(res=>{
        console.log(res)
        if(res.Success){
            var status = res.Data.spstate
          if (status === 0) {
            this.checkStatus = 'wait'
          } else if (status === 1) {
            this.checkStatus = 'success'
          } else if (status === 2) {
            this.checkStatus = 'failed'
          }
        }else{
          Toast(res.Msg)
        }
        console.log(res)
      })
    },
     goxzzw(){
      //  this.$router.push('/gsxx')
      if(this.checkStatus=="wait"){
        Toast('等待审核')
      }else if(this.checkStatus=='success'){
       this.$router.push('/ChooseBooth2')
      }else{
        Toast('未通过审核')

      }

      
     },
     uploadht(){
       Toast('请前往官网下载')
     },
      goReturn(){
         this.$router.push('/ChooseBooth')
     }
  }
};
</script>

<style lang="scss" scoped>
@function px($px) {
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.Articlesteps{
    width: 80%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left:-40% ;
    ul{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom:px(30) ;  
        li{
            margin: 0 px(10);
            font-size:px(28) ;
            // color: #3963EC; 
            // color: #fff;    
            font-family: PingFangSC;
            font-weight: bold;
        }
    }  
}
.banimgage-text{
    text-align: center;
}
 .stand_bottoms{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px(100);
    background: #fff;
    .stand_bottom{
      width: px(710);
      height: px(87);
      position: absolute;
      // bottom: px(12);
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
.banimgage{
    margin-top:px(490) ;
    img{
        width: px(780);
        height: px(500);
    }
 }
.Articlestepssum-li{
    display: block;
    width: px(40);
    height: px(40);
    background: #fff;
    border-radius:50% ;
    color: #214EB1;
    text-align: center;
    line-height: px(40);
    }
.Articlestepssum-li:nth-child(4){
    opacity: 0.4;
 }
 .Articlestepstext{
      color: #fff;  
 }
 .Articlestepstext-li:nth-child(4){
    opacity: 0.4;

 }
 .hx{
        position: absolute;
        top: 43%;
        left: 22%;
        width: px(115);
        height: px(2);
        border: px(2) solid #FFFFFF;
        background: #ffffff;
    }
    .xx{
        position: absolute;
        top: 43%;
        left: 42.5%;
        width: px(112);
        height: px(2);
        border: px(2) solid #FFFFFF;
        background: #ffffff;
        opacity: 0.4;
    }
    .xx1{
       left: 62.5%; 
    }
.header {
     //      width: 750px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: px(497);
    background: linear-gradient(126deg, #154498 0%, #3963EC 100%);
  .surrTra_top {
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    // background: #fff;
    // border-bottom: 1px solid rgba(44, 118, 217, 0.1);
    .surrTra_return {
      width: px(21);
      img {
        width: 100%;
      }
    }
    .surrTra_middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #FFFFFF;
    }
  }
}

</style>