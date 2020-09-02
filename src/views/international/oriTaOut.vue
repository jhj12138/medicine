<template>
  <div id = "oriTaOut">
    <div class="login_top">
      <div class="login_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle"></div>
    </div>
    <div class="login_con">
        <div class="new_top">
            <div class="new_a">{{Title}}</div>
            <div class="new_b">{{PubTime}}</div>
            <div class="new_con" v-html="Content"></div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {intenalDetail} from '../../api/home'
export default {
  data() {
    return{
      Title:null,
      PubTime:null,
      Content:null
    }
  },
  methods:{
    intenalDetail() {
      const data = {
        Id :this.$route.query.Id
      }
      intenalDetail(data).then((res) => {
        if (res.Success){
          this.Title = res.Data.Title
          this.PubTime = res.Data.PubTime
          this.Content = res.Data.Content
        } else {
          Toast(res.Msg)
        }
      })
    },
    goReturn() {
      this.$router.push('/forecoop')
    }
  },
  mounted(){
    this.intenalDetail()
    // this.clsId = this.$route.query.Id
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#oriTaOut{
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
      font-size: 16px;
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
            color:rgba(34,34,34,1);
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
        .new_con{
          margin-top: px(30);
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