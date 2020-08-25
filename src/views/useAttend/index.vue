<template>
  <div id = "useAttend">
    <div class="commodity_top">
      <div class="commodity_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="commodity_middle">我参加的展会</div>
      <div class="commodity_right">管理</div>
    </div>
    <div class="evedail_con">
      <ul>
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="evedail_li_top">
            <div class="commodity_li_left">
              <van-checkbox v-model="item.checked" @click="getList(item,item.checked,index)" icon-size="15px"></van-checkbox>
              <div class="commodity_li_name">上海展会</div>
              <div class="commodity_li_jin">
                <span>进行中</span>
              </div>
            </div>
          </div>
          <div class="evedail_li_bottom">
            <div class="evedail_li_span1">申请状态：已成功</div>
            <div class="evedail_li_span2">展会时间：2020.8.10 12:00</div>
            <div class="evedail_li_share">
              <span>重新申请</span>
              <span>下载门票</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      list:[{'checked':false},{'checked':false},{'checked':false},{'checked':false},{'checked':false},{'checked':false}],
    }
  },
  methods:{
    goAdd() {
      this.$router.push('/eveadd') //跳转到添加人员
    },
    goReturn() {
      this.$router.push('/evemanage') 
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