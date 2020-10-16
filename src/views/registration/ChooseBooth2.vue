<template>
  <div class="all">
    <div class="header">
      <div class="surrTra_top">
        <div class="surrTra_return" @click="goReturn">
          <img src="../../assets/image/mine_return.png" alt />
        </div>
        <div class="surrTra_middle">上传凭证</div>
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
    <div class="updataimg">
        <img src="../../assets/image/sczf.png" alt="" @click="updatazf">
        <!-- <img src="../../assets/image/sjxx.png" alt="" @click="kaipxx">
        <img src="../../assets/image/kaip.png" alt="" @click="rest"> -->
    </div>
      <div class="stand_bottoms">
             <div class="stand_bottom" @click="goxzzw">确定</div>
        </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { exhibitionObtainrbInvoice } from '../../api/user';
export default {
  data() {
    return {
      active: 1,
      list:[{
        name:111
      }],
      activeNames: [],
      Invoices:false,
    };
  },
  mounted(){
      this.updataym()
  },
  methods:{
      updataym(){
          var data = {
              rb : sessionStorage.rb
          }
       exhibitionObtainrbInvoice(data).then(res=>{
           console.log(res)
       })
      },
    updatazf(){
      this.$router.push('/Upload')
        
     },
     kaipxx(){
      this.$router.push('/Invoicesj')

     },
     rest(){
        this.$router.push('/Invoices')

     },
     goxzzw(){
       if(this.$route.query.id == "true"){
         Toast('报名成功')
        this.$router.push('/home')
       }else{
         Toast('请完善信息')
       }
       
     },
     goReturn(){
         this.$router.push('/ChooseBoothpass')
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
.updataimg{
  position: absolute;
  top: px(430);
  left: 0;
  
    img{
        width: px(750);
        height: px(145);
    }
}
.explain{
  display: flex;
  padding:px(10) px(30) ;
  
font-family: PingFangSC;
font-weight: 400;
color: #888888;
line-height: px(36);
  .explain1{
    width: px(100);
  }
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
 .Articlestepstext{
      color: #fff;  
 }
 .xzzw{
   margin-top:px(500) ;
 }
 .area{
   border-bottom:px(2) solid  #2669c007;
   input{
      width: 100%;
      height: px(100);
      outline: none;
      border: none;
      padding-left:px(30) ;
   }
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
        // opacity: 0.4;
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