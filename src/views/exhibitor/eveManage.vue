<template>
  <div id = "evemage" :class="v_flag?'evemage_hidden':''">
    <!-- 弹出框 -->
    <div class="evemage_flag" v-if="v_flag">
      <div class="evemage_flag_con">
        <div class="evemage_flag_close" @click="goClose">
          <img src="../../assets/image/eve_close.png" alt="">
        </div>
        <div class="evemage_flag_img">
          <img src="../../assets/image/eve_flags.png" alt="">
        </div>
        <div class="evemage_flag_txt" @click="goClose"></div>
      </div>
    </div>
    <div class="evemage_top">
      <div class="evemage_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="evemage_right">管理</div>
    </div>
    <div class="evemage_con">
      <ul>
        <li 
        v-for="(item,index) in list "
        :key = "index"
        @click="goDetail">
          <div class="evemage_li_top">
            <div class="evemage_li_left">
              <div class="evemage_li_yuan"></div>
              <div class="evemage_li_name">{{item.Title}}</div>
              <div class="evemage_li_jin">
                <span>进行中</span>
              </div>
            </div>
            <div class="evemage_li_right">
              <span>参展人员管理</span>
              <div class="evemage_li_img">
                <img src="../../assets/image/mine_go.png" alt="">
              </div>
            </div>
          </div>
          <div class="evemage_li_bottom">
            <div class="evemage_li_span1">展位号：D15/A26</div>
            <div class="evemage_li_span2">参展人数：10人</div>
            <div class="evemage_li_span3">展会时间：2020年8月20日-2020年9月20日</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { getParticipants } from '../../api/user/index';
export default {
  data() {
    return {
      list:[],
      v_flag:true,
      params:{}
    }
  },
  mounted(){
    this.getParticipants()
  },
  methods:{
    getParticipants(){
      this.params.cid = JSON.parse(sessionStorage.cidInfo).cid
      getParticipants(this.params).then(res=>{
        if(res.Success){
        this.list = res.Data.Data

        }else{
          Toast(res.Msg)
        }
      })
    },
    goDetail(){
      this.$router.push('/evedail') //跳转到参展人员管理详情
    },
    goReturn() {
      this.$router.push('/mine') 
    },
    goClose() {
      this.v_flag = false
    }
  }
}
</script>
<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#evemage{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .evemage_flag{
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.8);
    z-index: 999;
    .evemage_flag_con{
      width: px(560);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-45%,-50%);
      .evemage_flag_img{
        width: px(540);
        img{
          width: 100%;
        }
      }
      .evemage_flag_txt{
        width: px(200);
        height: px(60);
        position: absolute;
        left: px(80);
        left: 50%;
        transform: translateX(-60%);
        bottom: px(53);
      }
      .evemage_flag_close{
        width: px(50);
        position: absolute;
        right:0;
        img{width: 100%;}
      }
    }
  }
  .evemage_top{
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    top:0;
    left: 0;
    width: 100%;
    padding: 0 px(20);
    height: px(100);
    background-color: #f5f7fa;
    z-index: 99;
    .evemage_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .evemage_right{
      color:rgba(33,33,33,1);
      font-size: 18px;
    }
  }
  .evemage_con{
    padding-top:px(170);
    margin:0 px(20);
    ul{
      li{
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .evemage_li_top{
          height: px(74);
          border-bottom: 1px solid rgba(37,103,191,.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .evemage_li_left{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .evemage_li_yuan{
              width:px(20);
              height:px(20);
              border:1px solid rgba(135,135,135,1);
              opacity:0.6;
              border-radius:50%;
              margin-right: px(16);
            }
            .evemage_li_name{
              font-size: 16px;
              color: #212121;
              margin-right: px(30);
            }
            .evemage_li_jin{
              span{
                display: block;
                padding: 0 px(13);
                text-align: center;
                background: #2567BF;
                border-radius:px(3);
                font-size: 12px;
                color: #fff;
              }
            }
          }
          .evemage_li_right{
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .evemage_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
        }
        .evemage_li_bottom{
          padding: px(30) 0 px(43);
          line-height: 1;
          color: #555555;
          .evemage_li_span1{
            margin-bottom: px(17);
          }
          .evemage_li_span2{
            margin-bottom: px(17);
          }
        }
      }
    }
  }
}
.evemage_hidden{
  overflow: hidden;
}
</style>