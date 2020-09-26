<template>
  <div id = "certif">
    <div class="certif_top">
      <div class="certif_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="certif_middle">证书管理</div>
      <div class="certif_right" @click="change">管理</div>
    </div>
    <div class="certif_con" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
      <ul ref="scrollRef" v-if="listlen">
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="certif_li_top">
            <div class="certif_li_left">
              <div class="certif_li_yuan"></div>
              <div class="certif_li_name">{{item.name}}</div>
            </div>
            <div class="certif_li_right" @click="goDetail(item.ID)">
              <span>{{content1}}</span>
              <div class="certif_li_img">
                <img src="../../assets/image/mine_go.png" alt="">
              </div>
            </div>
          </div>
          <div class="certif_li_bottom">
            <div class="certif_lis_left">
              <div class="certif_li_txt1">
                <span>{{item.ID}}</span>
                <span>{{index+1}}</span>
              </div>
              <div class="certif_li_time">发布时间：{{item.addTime}}</div>
            </div>
            <div class="certif_lis_right">
              <img src="../../assets/image/certif_img.png" alt="">
            </div>
          </div>
        </li>
      </ul>
        <div v-else class="certif_lis_cont">暂无内容....</div>
      <div ref = "scrollRef"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {getObtainCertificate} from "../../api/home"
export default {
  data() {
    return {
      busy: false,
      list:null,
      listlen:true,
      content:{
        bj:"编辑",
        add:"添加"
      },
      content1:"编辑",
      flag:true,
      ID:""
    }
  },
  mounted(){
    this.getObtainCertificate()
  },
  methods:{
    change(){
      if(this.flag){
        this.flag=false
        this.content1 = this.content.add
      }else{
        this.flag=true
        this.content1 = this.content.bj
      }
    },
    getObtainCertificate(){
      var cid = JSON.parse(sessionStorage.cidInfo)
      let data = {
        cid :cid.cid
      }
   getObtainCertificate(data).then(res=>{
      if(res.Success){
        this.list = res.Data.Data
        if(this.list.length == 0){
          this.listlen = false
        }else{
          this.listlen = true
        }
      }else{
        Toast(res.Msg)
      }
     })
    },
    goReturn() {
      this.$router.push('/mine') 
    },
    goDetail(ID) {
      this.$router.push({
        path:'/cerdetail',
        query:{flag:this.flag,
        ID:ID}}) 
    },
    loadMore: function() {
      this.busy = true
      // this.list.push([{])
      // console.log('22233444')
      setTimeout(() => {
        this.busy = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.certif_lis_cont{
  text-align: center;
  line-height: px(300);
}
#certif{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .certif_top{
    height: px(100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 px(20);
    position: relative;
    background: #fff;
    color: #222222;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    .certif_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .certif_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
    .certif_right{
      font-size: 16px;
    }
  }
  .certif_con{
    padding-top:px(130);
    margin:0 px(20);
    ul{
      li{
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .certif_li_top{
          height: px(74);
          border-bottom: 1px solid rgba(37,103,191,.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .certif_li_left{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .certif_li_yuan{
              width:px(20);
              height:px(20);
              border:1px solid rgba(135,135,135,1);
              opacity:0.6;
              border-radius:50%;
              margin-right: px(24);
            }
            .certif_li_name{
              font-size: 16px;
              color: #212121;
              margin-right: px(30);
            }
          }
          .certif_li_right{
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .certif_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
        }
        .certif_li_bottom{
          padding: px(30) 0 px(40);
          line-height: 1;
          display: flex;
          justify-content: space-between;
          height: 100%;
          .certif_lis_left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #565656;
            .certif_li_txt1{
              display: flex;
              flex-direction: column;
              span{
                margin-bottom: px(22);
              }
            }
          }
          .certif_lis_right{
            width: px(165);
            img{width: 100%;}
          }
        }
      }
    }
  }
}
</style>