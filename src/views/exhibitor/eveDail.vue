<template>
  <div id = "evedail">
    <div class="evemage_top">
      <div class="evemage_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="evemage_right">管理</div>
    </div>
    <div class="evedail_con">
      <ul>
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="evedail_li_top">
            <div class="evedail_li_left">
              <div class="evedail_li_yuan"></div>
              <div class="evedail_li_name">姓名</div>
            </div>
            <div class="evedail_li_right" @click="goAdd">
              <span>编辑</span>
              <div class="evedail_li_img">
                <img src="../../assets/image/mine_go.png" alt="">
              </div>
            </div>
          </div>
          <div class="evedail_li_bottom">
            <div class="evedail_li_span1">身份证号：4546456456128702</div>
            <div class="evedail_li_span2">手机号码：132456482</div>
            <div class="evedail_li_share">
              <span>下载餐券</span>
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
      list:[{},{},{},{},{},{}]
    }
  },
  methods:{
    goAdd() {
      this.$router.push('/eveadd') //跳转到添加人员
    },
    goReturn() {
      this.$router.push('/evemanage') 
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}

#evedail{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
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
    z-index: 999;
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
  .evedail_con{
    padding-top:px(170);
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
          .evedail_li_left{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .evedail_li_yuan{
              width:px(20);
              height:px(20);
              border:1px solid rgba(135,135,135,1);
              opacity:0.6;
              border-radius:50%;
              margin-right: px(46);
            }
            .evedail_li_name{
              font-size: 16px;
              color: #212121;
              margin-right: px(30);
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