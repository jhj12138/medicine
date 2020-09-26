<template>
  <div id = "exhibitionxq">
    <div class="exhibit_top">
      <div class="exhibit_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="exhibit_middle">展商</div>
    </div>
    <div class="exhibit_con">
      <div class="exhibit_con_top">
        <div class="exhibit_con_tit">
          <div class="exhibit_tit_img">
            <img :src="LOGO" alt="">
          </div>
          <div class="exhibit_tit_right">
            <div class="exhibit_tit_name">{{introduce}}</div>
            <div class="exhibit_tit_zhanwei">{{number}}</div>
          </div>
        </div>
        <div class="exhibit_con_lianx">
          <p>联系方式</p>
          <div class="exhibit_con_people">
            <span>联系人</span>
            <span>{{contacts}}</span>
          </div>
          <div class="exhibit_con_people">
            <span>邮箱</span>
            <span>{{mailbox}}</span>
          </div>
          <div class="exhibit_con_people">
            <span>手机</span>
            <span>{{phone}}</span>
          </div>
        </div>
      </div>
      <div class="exhibit_con_ul">
        <div class="exhibit_con_li" v-for="(item,index) in list"
        :key = "index">
          <div class="exhibit_li_img">
            <img :src="imgUrl[index]" alt="">
          </div>
          <div class="exhibit_li_bottom">
            <div class="exhibit_li_name">{{item.name}}</div>
            <div class="exhibit_li_btn" @click="goDetail(item.Pid)">立即询价</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {ObtainContactUs,Obtaincommodity} from '../../api/home'
export default {
  data() {
    return {
      CurPage:0,
      PageSize:5,
      busy: false,
      tabContents:[],
      LOGO:null,
      contacts:null,
      introduce:null,
      phone:null,
      mailbox:null,
      list:null,
      imgUrl:[],
      number:""
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/search')
    },
    goDetail(ids) {
      this.$router.push({ path: '/comdetail', query: { Id: ids ,cid:this.list[0].cid} })
    },
    ObtainContactUs() {
      console.log(this.$route.query.Id)
      const data = {
        cid : this.$route.query.Id
        // cid : 20
      }
      ObtainContactUs(data).then((res) => {
        if (res.Success){
          res.Data.LOGO = res.Data.LOGO.split("&&")[0]
          this.LOGO = 'https://www.zjylz.com'+ res.Data.LOGO 
          this.contacts = res.Data.contacts
          this.introduce = res.Data.introduce
          this.phone = res.Data.phone
          this.mailbox = res.Data.mailbox
          this.number = res.Data.number
          console.log(res)
          // res.Data.forEach(ele => {
          //   this.colu1.push(ele.Id)
          //   this.columns1.push(ele.Name)
          // })
          // console.log('qwuhdaiusfhdaius',res)
        } else {
          Toast(res.Msg)
        }
      })
    },
    Obtaincommodity() {
      const data = {
        // cid : this.$route.query.Id
        cid : this.$route.query.Id
      }
      Obtaincommodity(data).then((res) => {
        if (res.Success){
          this.list = res.Data.Data
          res.Data.Data.forEach(ele => {
           this.imgUrl.push('https://www.zjylz.com'+ ele.ImgList.split("&&")[0])
           console.log(this.imgUrl)
          })
          console.log(this.list)
          // res.Data.LOGO = res.Data.LOGO.split("&&")[0]
          // this.LOGO = 'https://www.zjylz.com'+ res.Data.LOGO 
          // this.contacts = res.Data.contacts
          // this.introduce = res.Data.introduce
          // this.phone = res.Data.phone
          // this.mailbox = res.Data.mailbox
          // res.Data.forEach(ele => {
          //   this.colu1.push(ele.Id)
          //   this.columns1.push(ele.Name)
          // })
          
        } else {
          Toast(res.Msg)
        }
      })
    }
  },
  mounted(){
    this.ObtainContactUs()
    this.Obtaincommodity()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#exhibitionxq{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .exhibit_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .exhibit_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .exhibit_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .exhibit_con{
    padding: 0 px(20);
    margin-top: px(130);
    .exhibit_con_top{
      // padding: px(34) px(20);
      background: #fff;
      .exhibit_con_tit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: px(30) 0;
        margin:0 px(20);
        border-bottom: 1px solid rgba(38,104,192,.1);
        .exhibit_tit_img{
          width: px(200);
          height: px(200);
          border-radius: 50%;
          margin-right: px(26);
          img{
            width: 100%;
            height: 100%;
            border-radius:50% ;
          }
        }
        .exhibit_tit_right{
          .exhibit_tit_name{
            width: px(450);
            font-size: 16px;
            font-weight: bold;
            color: #222222;
          }
          .exhibit_tit_zhanwei{
            margin-top: px(18);
            width: px(104);
            height: px(40);
            background: #2668C0;
            border-radius: px(4);
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            color: #fff;
          }
        }
      }
      .exhibit_con_lianx{
        margin:0 px(20);
        padding: px(30) 0;
        p{
          font-size: 16px;
          color: #9A9A9A;
          margin-bottom: px(30);
          line-height: 1;
        }
        .exhibit_con_people{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: px(10);
        }
        .exhibit_con_people:last-child{
          margin-bottom: 0;
        }
      }
    }
    .exhibit_con_ul{
      padding:px(30);
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-flow: wrap;
      .exhibit_con_li{
        width:48%;
        margin:0 px(0) px(20) 0;
        margin-right: 4%;
        border-radius: px(10);
        .exhibit_li_img{
          width: 100%;
          height: px(334);
          border-top-left-radius: px(10);
          border-top-right-radius: px(10);
          img{
            width: 100%;
            height: 100%;
            border-top-left-radius: px(10);
            border-top-right-radius: px(10);
          }
        }
        .exhibit_li_bottom{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          border-bottom-left-radius: px(10);
          border-bottom-right-radius: px(10);
          .exhibit_li_name{
            padding:px(30) 0 px(20);
            font-size: 14px;
            line-height: 1;
            font-weight: bold;
            color: #222222;
          }
          .exhibit_li_btn{
            padding:px(10) px(20);
            border-radius: px(10);
            line-height: 1;
            border: 1px solid #2668C0;
            font-size: 14px;
            color: #2768C0;
            margin-bottom: px(30);
          }
        }
      }
      .exhibit_con_li:nth-of-type(2n){
        margin-right: 0px;
      }
    }
  }
}
</style>