<template>
   <div class="all">
       <div class="comDetail_top">
      <div class="comDetail_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comDetail_middle">快速询价</div>
    </div>
   <div class="bs-rc">
          <p>快速询价</p>
          <textarea
            name
            id
            cols="30"
            rows="10"
            class="la"
            placeholder="请输入咨询的内容"
            v-model="sa"
          ></textarea>
          <input type="text" class="lb" placeholder='请输入您的称呼' v-model="sb" />
          <input type="text" class="lc" placeholder="请输入您的联系电话" v-model="sc" />
          <div class="bs-uu">
            <input type="text" placeholder="输入验证码" v-model="ss" />
            <img src="https://www.zjylz.com//api/common/imgcode" alt />
          </div>
          <div class="bs-uo" @click="gosend()">提交</div>
        </div>
</div>


</template>

<script>
import { Toast } from 'vant';
import {getad,imgcode} from '../../api/home'
export default {
data() {
    return {
        sa:"",
        sb:"",
        sc:"",
        ss:"",

    };
  },
  methods:{
      goReturn(){
          this.$router.push({path:'/comDetail',query:{Id:this.$route.query.id,cid:this.$route.query.cid}})
      },
      gosend(){
        const kj = {
        uid:sessionStorage.Uid,
        cid: this.$route.query.cid,
        id:this.$route.query.id,
        content:
          this.sa + "<br>" + this.sb + "<br>" + this.sc + "<br>" + this.ss,
      };
       if (
        this.sa === "" ||
        this.sb === "" ||
        this.sc === "" ||
        this.ss === ""
      ) {
        Toast("信息不能为空！");
      } else {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(this.sc)) {
          Toast("手机号格式不正确");
          return false;
        } else {
          getad(kj).then((res) => {
            if (res.Success) {
              Toast(res.msg);
              this.$router.push({path:'/comDetail',query:{Id:this.$route.query.id,cid:this.$route.query.cid}})
            }
            Toast(res.Msg);
          });
          return true;
        }
      } 
      }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.comDetail_top{
    margin-bottom:px(60) ;
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .comDetail_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .comDetail_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
 .bs-rc {

        padding: px(48) 11% px(12) 11%;
        background-color: white;
        margin-top: px(80);
        p {
          font-size: px(46);
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          line-height:px(42);
        }
        textarea {
          width: 90%;
          padding: 2% 5%;
          margin: px(30)0 0 0;
          border: px(1) solid rgba(223, 223, 223, 1);
        }
        input {
          height: px(76);
          border: px(2) solid rgba(223, 223, 223, 1);
          margin: px(20) 0;
          width: 95%;
          padding: 0 0 0 5%;
        }
        .bs-uu {
          overflow: hidden;
          input {
            width: 63%;
            float: left;
          }
          img {
            width: 31%;
            float: left;
            vertical-align: bottom;
            height: px(76);
            cursor: pointer;
            margin: px(20) 0;
          }
        }
        .bs-uo {
          height: px(76);
          background: rgba(44, 118, 218, 1);
          border-radius: px(38);
          font-size: px(24);
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height:px(76);
          text-align: center;
          margin-top: px(76);
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            background: rgb(86, 148, 230);
          }
        }
      }
</style>