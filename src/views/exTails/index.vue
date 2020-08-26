<template>
  <div id = "exTails">
    <div class="login_top">
      <div class="login_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle">展会介绍</div>
    </div>
    <div class="login_con">
        <div class="new_top">
            <div class="new_a">ZIMEX 第十七届浙江基层医疗装备展览会介绍</div>
            <div class="new_b">2020.3.25 15:15:34</div>
            <div class="new_c">
                <img src="../../assets/image/fore_img.png" alt="">
            </div>
            <div class="new_d">
                <div>飞利浦在历代经典产品的基础上，不断超越心脏、神经、肿瘤、血管介入等专业领域的创新。在全新的UNIQ高端融合平台上，我们的创新将突破传统硬件升级的局限，更长远的定位于融合优越图像和极低剂量的前沿趋势。 临床使用者将真正感受到极低剂量的差异，和多学科图像融合带来的震撼。尤其在发展迅速的肿瘤介入领域，UNIQ高端平台将支持临床做出更加快速精准的诊疗。</div>
                <div>飞利浦在历代经典产品的基础上，不断超越心脏、神经、肿瘤、血管介入等专业领域的创新。在全新的UNIQ高端融合平台上，我们的创新将突破传统硬件升级的局限，更长远的定位于融合优越图像和极低剂量的前沿趋势。 临床使用者将真正感受到极低剂量的差异，</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    goPass(){
      this.$router.push('/retpassword')
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#exTails{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  // background-color: #f5f7fa;
  .login_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    border:1px solid rgba(229,229,229,.5);
    .login_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .login_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: px(30);
      font-weight: bold;
    }
  }
  .login_con{
    width: 100%;
    height: 100%;
    .new_top{
        width: 92%;
        margin: 0 auto;
        margin-top: px(100);
        .new_a{
            font-size:px(32);
            font-weight:500;
            color:#222222;
            line-height:px(50);
            padding: px(25) 0;
        }
        .new_b{
            font-size:px(24);
            font-weight:bold;
            color:rgba(136,136,136,1);
        }
        .new_c{
            margin: px(40) 0;
            img{
                width: 100%;
            }
        }
        .new_d{
            div{
                font-size:px(28);
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:px(48);
                margin-bottom: px(40);
            }
        }
    }
  }
}
</style>