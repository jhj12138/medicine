<template>
  <div id = "useCourse">
    <div class="certif_top">
      <div class="certif_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="certif_middle">我的课程评论</div>
      <div class="certif_right" @click="change">管理</div>
    </div>
    <div class="invdetail_con">
      <ul>
        <li 
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="invdetail_li_top">
            <div class="invdetail_li_left">
              <van-checkbox v-model="item.checked" @click="getList(item,item.checked,index)" icon-size="15px"></van-checkbox>
              <div class="invdetail_li_name">{{item.LessionName}}</div>
              <div class="invdetail_li_jin">
                <span>{{item.Status}}</span>
                
              </div>
               <div class="message_li_right" v-show="flags">
              <span @click="del(item.Id)">删除</span>
              <div class="message_li_img">
                <img src="../../assets/image/mine_go.png" alt="">
              </div>
            </div>
            </div>
          </div>
          <div class="invdetail_li_bottom">
            <div class="message_li_span"><div class="message_li_tit">评论内容<span></span></div>：<span>{{item.Content}}</span></div>
            <div class="message_li_span"><div class="message_li_tit">评论时间<span></span></div>：<span>{{item.CreateTime}}</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom" @click="goInvoice">确定</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import {commentlist, delcommentlist} from "../../api/user"
export default {
  data() {
    return{
      list:[],
      flags:false
    }
  },
  mounted(){
    this.commentlist()
  },
  methods:{
    del(ids){
      delcommentlist({ids}).then(res=>{
        // console.log(res)
        Toast(res.Msg)
        this.$router.go(0)
      })
    },
    change(){
      if(!this.flags){
      this.flags = true

      }else{
        this.flags = false
      }
    },
    commentlist(){
      commentlist({}).then(res=>{
        this.list = res.Data.Data
          console.log(res)
      })
    },
    goReturn() {
      if(sessionStorage.IdentityType == "个人用户"){
      this.$router.push('/mines')

      }else{
      this.$router.push('/mine')
      }
    },
    goInvoice() {
      if(sessionStorage.IdentityType == "个人用户"){
      this.$router.push('/mines')

      }else{
      this.$router.push('/mine')
      }
    },
    getList(item,checked,index){
      // if(checked){

      // }
      // console.log(index)
      // console.log(item)
    },
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#useCourse{
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
    z-index: 99;
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
   .message_li_right{
     margin-left: px(35);
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .message_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
  .invdetail_con{
    padding:px(130) 0;
    margin:0 px(20);
    ul{
      li{
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .invdetail_li_top{
          height: px(74);
          border-bottom: 1px solid rgba(37,103,191,.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .invdetail_li_left{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .invdetail_li_yuan{
              width:px(20);
              height:px(20);
              border:1px solid rgba(135,135,135,1);
              opacity:0.6;
              border-radius:50%;
              margin-right: px(16);
            }
            .invdetail_li_name{
              font-size: 16px;
              color: #212121;
              margin:0 px(30) 0 px(17);
            }
            .invdetail_li_jin{
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
          .invdetail_li_right{
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .invdetail_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
        }
        .invdetail_li_bottom{
          padding: px(30) 0 px(13);
          line-height: 1;
          color: #555555;
          .message_li_span{
            // margin-bottom: px(10);
            display: flex;
            // text-align: justify;
            // align-items: center;
            overflow-y: hidden;
            .message_li_tit{
              width: px(160);
              text-align: justify;
              >span{
                width: 100%;
                display: inline-block;
              }
            }   
            span{
              display:inline-block;
              width:100%;
            }
          }
          .message_li_span:nth-child(1){
            margin-bottom: px(20);
          }
        }
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
}
</style>