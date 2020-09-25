<template>
  <div id = "mine">
    <div class="mine_top">
      <!-- 返回 -->
      <div class="mine_return" @click="returnHome">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="mine_top_bg">
        <img src="../../assets/image/mine_bg.png" alt="">
      </div>
      <!-- 个人信息 -->
      <div class="mine_con">
        <div class="mine_con_top">
          <div class="mine_portrait">
            <img src="../../assets/image/mine_header.png" alt="">
          </div>
          <div class="mine_name">
            <div class="mine_names">
              <span>{{userList.Title}}</span>
              <div class="mine_names_img">
                <img src="../../assets/image/mine_six.png" alt="">
              </div>
            </div>
            <div class="mine_message" @click="goAcc">查看个人主页</div>
          </div>

        </div>
        <div class="mine_con_bottom">
          <div class="mine_con_mailbox" @click="goMessage">
            <span>{{usermessagelgth}}</span>
            <span>站内信</span>
          </div>
          <!-- <div class="mine_heng"></div> -->
          <!-- <div class="mine_con_mailbox" @click="goForm">
            <span>999</span>
            <span>联系表单</span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="mine_cont">
      <!-- 展会管理 -->
      <div class="mine_admin">
        <div class="mine_admin_top">
          <div class="mine_admin_img">
            <img src="../../assets/image/mine_admin.png" alt="">
          </div>
          <div class="mine_admin_tit">展会管理</div>
        </div>
        <div class="mine_admin_cons">
          <ul class="mine_admin_ul">
            <li class="mine_admin_li" @click="goshowlist">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine1.png" alt="">
              </div>
              <div class="mine_admin_name">展会列表</div>
            </li>
            <li class="mine_admin_li" @click="goExhib">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine2.png" alt="">
              </div>
              <div class="mine_admin_name">参展人员管理</div>
            </li>
            <li class="mine_admin_li" @click="goStand">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine3.png" alt="">
              </div>
              <div class="mine_admin_name">线上展位管理</div>
            </li>
          </ul>
          <ul class="mine_admin_ul">
            <li class="mine_admin_li" @click="goCommodity">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine4.png" alt="">
              </div>
              <div class="mine_admin_name">商品管理</div>
            </li>
            <li class="mine_admin_li" @click="goCertif">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine5.png" alt="">
              </div>
              <div class="mine_admin_name">证书管理</div>
            </li>
            <!-- 用于占位置 -->
            <li class="mine_admin_li" style=" visibility: hidden;">
              <div class="mine_admin_top2">
                <img src="../../assets/image/mine3.png" alt="">
              </div>
              <div class="mine_admin_name">线上展位管理</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 发票管理及修改密码 -->
      <div class="mine_invocie" @click="goInv">
        <div class="mine_invocie_left">
          <div class="mine_invocie_ing">
            <img src="../../assets/image/mine_invoice.png" alt="">
          </div>
          <span>发票管理</span>
        </div>
        <div class="mine_invocie_right"><img src="../../assets/image/mine_go.png" alt=""></div>
      </div>
      <div class="mine_invocie" @click="goChangepw">
        <div class="mine_invocie_left">
          <div class="mine_invocie_ing">
            <img src="../../assets/image/mine_password.png" alt="">
          </div>
          <span>修改密码</span>
        </div>
        <div class="mine_invocie_right"><img src="../../assets/image/mine_go.png" alt=""></div>
      </div>
    </div>   
  </div>
</template>
<script>
import {usermessagelist} from '../../api/user'
import {Obtaincommodity} from '../../api/home'
export default {
  data() {
    return {
      userList:null,
      username:null,
      usermessagelgth:null,

    }
  },
  mounted(){
    this.getInformation()
  },
  methods:{
    getInformation(){
      this.userList = JSON.parse(sessionStorage.cidInfo) 
      console.log(this.userList)
      //获取站内信列表
      usermessagelist().then(res=>{
        this.usermessagelgth = res.Data.Data.length
      })
      // //获取商品列表
      // let data = {
      //   cid:this.userList.cid
      // }
      // Obtaincommodity(data).then(res=>{
      //   res.Data.Data.length
      // })
    },
    goshowlist(){
       this.$router.push('/showlist') //返回首页

    },
    returnHome(){
       this.$router.push('/home') //返回首页
    },
    goChangepw(){
      this.$router.push('/changePass') //跳转修改密码
    },
    goExhib(){
      this.$router.push('/evemanage') //跳转到参展人员管理
    },
    goCertif(){
      this.$router.push('/certifcate') //跳转到证书管理
    },
    goCommodity(){
      this.$router.push('/commodity') //跳转到商品管理
    },
    goStand(){
      this.$router.push('/standmage') //跳转到展位管理
    },
    goMessage(){
      this.$router.push('/message') //跳转到站内信
    },
    // goForm(){
    //   this.$router.push('/contform') //跳转到联系表单
    // },
    goInv(){
      this.$router.push('/invdetail') //跳转到发票管理
    },
    goAcc(){
      this.$router.push('/accinform') //跳转到账户信息
    }
  }
}
</script>


<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#mine{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .mine_top{
    height: px(490);
    width: 100%;
    position: relative;
    .mine_top_bg{
      width: 100%;
      img{width: 100%;}
    }
    .mine_return{
      position: absolute;
      width: px(21);
      top:px(60);
      left: px(25);
      img{
        width: 100%;
      }
    }
    .mine_con{
      width: px(710);
      height: px(306);
      background: #FFFFFF;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background:rgba(255,255,255,1);
      border-radius:px(20) px(20) 0px 0px;
      box-shadow:0px 3px 13px 0px rgba(31,53,184,0.11);
      .mine_con_top{
        display: flex;
        align-items: center;
        padding: 0 px(35);
        margin-top: px(46);
        .mine_portrait{
          width: px(75);
          height: px(75);
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .mine_name{
          height: px(76);
          margin-left: px(20);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .mine_names{
            display: flex;
            align-items: center;
            margin-top: px(12);
            span{
              font-size:16px;
              font-weight:bold;
              color:rgba(33,33,33,1);
              line-height: 1;
            }
            .mine_names_img{
              width: px(19);
              margin-left: px(10);
              img{
                width: 100%;
              }
            }
          }
          .mine_message{
            font-size:12px;
            font-weight:400;
            color:rgba(135,135,135,1);
            line-height: 1;
          }
        }
      }
      .mine_con_bottom{
        display: flex;
        align-items: center;
        padding: 0 px(140);
        justify-content: center;
        margin-top: px(60);
        .mine_con_mailbox{
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          span:nth-of-type(1){
            font-size: 16px;
            color: #212121;
            line-height: 1;
          }
          span:nth-of-type(2){
            font-size: 16px;
            color: #212121;
            line-height: 1;
            margin-top: px(17);
          }
        }
        .mine_heng{
          width:px(3);
          height:px(73);
          background:rgba(37,103,191,1);
          opacity:0.1;
        }
      }
    }
  }
  .mine_cont{
    padding: 0 px(20);
    .mine_admin{
      margin-top: px(40);
      background:rgba(255,255,255,1);
      box-shadow:0px 3px 13px 0px rgba(31,53,184,0.11);
      border-radius:10px;
      margin-bottom: px(40);
      .mine_admin_top{
        display: flex;
        align-items: center;
        height: px(72);
        margin: 0 px(19);
        border-bottom: 1px solid rgba(37,103,191,.1);
        .mine_admin_img{
          width: px(27);
          img{
            width: 100%;
          }
        }
        .mine_admin_tit{
          font-size: 16px;
          font-weight: bold;
          color: #212121;
          line-height: 1;
          margin-left: px(19);
        }
      }
      .mine_admin_cons{
        padding-top: px(30);
      }
      .mine_admin_ul{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        padding: 0 px(70);
        justify-content: space-between;
        padding-bottom: px(30);
        .mine_admin_li{
          display: flex;
          flex-direction: column;
          align-items: center;
          // margin-right: px(10);
          .mine_admin_top2{
            width: px(100);
            img{
              width: 100%;
            }
          }
        }
        .mine_admin_li:nth-child(3n){
          margin-right: 0;
        }
      }
    }
    .mine_invocie{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:0 px(40);
      border-top:1px solid rgba(37,103,191,.1);
      border-bottom:1px solid rgba(37,103,191,.1);
      height: px(90);
      .mine_invocie_left{
        display: flex;
        align-items: center;
        .mine_invocie_ing{
          width: px(32);
          img{
            width: 100%;
          }
        }
        span{
          margin-left: px(20);
        }
      }
      .mine_invocie_right{
        width: px(13);
        img{
          width: 100%;
        }
      }
    }
    .mine_invocie:nth-child(3){
      border-top: none;
    }
  } 
}
</style>