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
        <div class="banimgage-text">
            <p>您提交的展商申请资料，未通过审核</p>
            <a href="###">未通过原因为：1、公司名称与营业执照名称不符合</a>
        </div>
    </div>
    <div class="stand_bottoms">
        <div class="stand_bottom" @click="goxzzw">重新填写</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      list:[{
        name:111
      }],
      activeNames: [],
    };
  },
  methods:{
     goxzzw(){
       this.$router.push('/gsxx')
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