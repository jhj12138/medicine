<template>
  <div id = "useAttend">
    <div class="commodity_top">
      <div class="commodity_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="commodity_middle">我参加的展会</div>
      <div class="commodity_right">管理</div>
    </div>
    <div class="evedail_con" v-if="flag">
      <ul>
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="evedail_li_top">
            <div class="commodity_li_left">
              <van-checkbox v-model="item.checked" @click="getList(item,item.checked,index)" icon-size="15px"></van-checkbox>
              <div class="commodity_li_name">{{item.Title}}</div>
              <div class="commodity_li_jin">
                <!-- <span>进行中</span> -->
              </div>
            </div>
          </div>
          <div class="evedail_li_bottom">
            <div class="evedail_li_span1">申请状态：已成功</div>
            <div class="evedail_li_span2">展会时间：{{item.starttime}} -- {{item.endttime}}</div>
            <!-- <div class="evedail_li_share">
              <span @click="download1">重新申请</span>
              <span @click="download">下载门票</span>
            </div> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="evedail_con" v-else>
      <ul>
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="evedail_li_top">
            <div class="commodity_li_left">
              <van-checkbox v-model="item.checked" @click="getList(item,item.checked,index)" icon-size="15px"></van-checkbox>
              <div class="commodity_li_name">{{item.ExhibitionName}}</div>
              <div class="commodity_li_jin">
                <span>{{item.ExhiStatus}}</span>
              </div>
            </div>
          </div>
          <div class="evedail_li_bottom">
            <div class="evedail_li_span1">申请状态：{{item.ApplyStatus}}</div>
            <div class="evedail_li_span2">展会时间：{{item.StartTime}} -- {{item.EndTime}}</div>
            <!-- <div class="evedail_li_share">
              <span @click="download1">重新申请</span>
              <span @click="download">下载门票</span>
            </div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {getlist} from "../../api/home"
import {getlists} from "../../api/user"
export default {
  data() {
    return{
      list:[],
      lists:{
        state:"进行中",
        bgein:"已结束",
        nostate:"未开始"
      },
      states:"",
      flag:true,
    }
  },
   mounted(){
     if(sessionStorage.IdentityType == "个人用户"){
       this.getlists()
       this.flag = false
     }else{
      this.getlist()
       this.flag = true

     }
  },
  methods:{
    download(){
      Toast('请前往官网下载')
    },
    download1(){
      Toast('请前往官网申请')

    },
    getlists(){
      getlists({}).then(res=>{
        if(res.Success){
        this.list = res.Data.Data

        }else{
          Toast(res.Msg)
        }
        console.log(res)
      })
    },
    //展商
      getlist(){
          var data = {
              cid:JSON.parse(sessionStorage.cidInfo).cid
          }
          getlist(data).then(res=>{
            this.list = res.Data.Data
            // var statetime = new Date().getTime()
            // var nostatetime = new Date(res.Data.Data.starttime).getTime()
            // var bintime = new Date(res.Data.Data.endttime).getTime()
            console.log(res.Data.Data)
            // console.log(nostatetime)
          })
      },
    goAdd() {
      this.$router.push('/eveadd') //跳转到添加人员
    },
    goReturn() {
       if(sessionStorage.IdentityType == "个人用户"){
      this.$router.push('/mines')

      }else{
      this.$router.push('/mine')
      }
      // this.$router.push('/evemanage') 
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

#useAttend{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .commodity_top{
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
    .commodity_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .commodity_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
    .commodity_right{
      font-size: 16px;
    }
  }
  .evedail_con{
    padding-top:px(130);
    margin:0 px(20);
    ul{
      li{
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .evedail_li_top{
          height: px(74);
          border-bottom: 1px solid rgba(37,103,191,.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .commodity_li_left{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .commodity_li_yuan{
              width:px(20);
              height:px(20);
              border:1px solid rgba(135,135,135,1);
              opacity:0.6;
              border-radius:50%;
              margin-right: px(24);
            }
            .commodity_li_name{
              
              width:px(600);    
              overflow: hidden;    
              text-overflow:ellipsis;    
              white-space: nowrap;
              font-size: 16px;
              color: #212121;
              margin:0 px(30) 0 px(24);
            }
            .commodity_li_jin{
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
          .evedail_li_right{
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .evedail_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
        }
        .evedail_li_bottom{
          padding: px(30) 0 px(40);
          line-height: 1;
          .evedail_li_span1{
            margin-bottom: px(17);
            color: #555555;
          }
          .evedail_li_span2{
            color: #555555;
            margin-bottom: px(58);
          }
          .evedail_li_share{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 px(110);
            span{
              display: flex;
              line-height: 2;
              border-bottom: 2px solid #2567BF;
              color: #3F75C5;
            }
          }
        }
      }
    }
  }
}
</style>