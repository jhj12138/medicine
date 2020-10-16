<template>
  <div id = "offlineDetail">
    <div class="login_top">
      <div class="login_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle"></div>
    </div>
    <div class="login_con">
        <div class="new_top">
            <div class="new_a">{{this.Title}}</div>
            <div class="new_b">
              <div class="acd_left">
                <div class="acd_left_time">活动时间：{{ActivityTime}}-{{ActivityTimeEnd}}</div>
                <div class="acd_left_address">活动地点：{{Address}}</div>
              </div>
              <div class="acd_right" @click="goBao">{{getstate}}</div>
            </div>
            <div class="acdeTails" v-html="Content">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {offlineDetail,activityJoin} from '../../api/home'
export default {
  data() {
    return{
      Title:null,
      Address:null,
      Content:null,
      ActivityTime:null,
      ActivityTimeEnd:null,
      Ids:null,
      nowTime:null,
      endTime:null,
      xtime:null,
      getTime:{
        state:"立即报名",
        begin:"已结束",
        nostate:"未开始"
      },
      getstate:null,
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/offlineActive')
    },
    goBao() {
      const data = {
        ActivityId:this.Ids
      }
      activityJoin(data).then((res) => {
        if (res.Success){
           if(this.getstate == "立即报名"){
            Toast(res.Msg)
          }else if (this.getstate == "已结束"){
            Toast("活动已结束")
          }else if(this.getstate == "未开始"){
            Toast("活动还未开会")
          }
        } else {
          Toast(res.Msg)
        }
      })
    },
    intenalDetail() {
      const data = {
        Id :this.$route.query.Id,
      }
      offlineDetail(data).then((res) => {
        if (res.Success){
          this.Title = res.Data.Title
          this.Address = res.Data.Address
          this.Content = res.Data.Content.replace(/\/Upload/g, 'https://www.zjylz.com/Upload')
          this.Ids = res.Data.Id
          this.ActivityTime = res.Data.ActivityTime.replace(/-/g,".")
          this.ActivityTimeEnd = res.Data.ActivityTimeEnd.replace(/-/g,".")
          this.endTime = new Date(this.ActivityTimeEnd).getTime()
          this.xtime = new Date( this.ActivityTime).getTime()
          this.nowTime = new Date().getTime()
          console.log(this.nowTime)
          if(this.nowTime <  this.xtime){
            this.getstate = "未开始"
          }else if(this.nowTime >=  this.xtime && this.nowTime <=  this.endTime){
            this.getstate = "报名参加"
          }else if(this.nowTime >  this.endTime){
           this.getstate = "已结束"
          }
        } else {
          Toast(res.Msg)
        }
      })
    },
  },
  mounted(){
    this.intenalDetail()
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#offlineDetail{
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
            text-align: center;
            font-size:px(32);
            font-weight:600;
            color:rgba(34,34,34,1);
            line-height:px(50);
            padding: px(25) 0;
        }
        .new_b{
            font-size:px(24);
            font-weight:bold;
            color:rgba(136,136,136,1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            .acd_right{
              width: px(140);
              height: px(60);
              background: #2668C0;
              border-radius: px(6);
              color: #FFFFFF;
              line-height: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
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
  .acdeTails{
    margin-top: px(40);
    img{
      width: 100%;
      height: 100%;
    }
    // blockquote{
    //   margin: 0;
    // }
  }
}
</style>