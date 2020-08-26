<template>
  <div id = "inter">
    <div class="login_top">
      <div class="login_return">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="login_middle">我感兴趣的</div>
    </div>
    <div class="ix-top">
        <div class="ix-a">我感兴趣的</div>
        <div class="ix-b">
            <div v-for="(item,ind) in list" :key="ind" @click="xz($event)" class="">{{item}}</div>
        </div>
        <div class="ix-c">
            <p>全部选择</p>
            <div>下一步</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        list:['我感兴趣的','我趣的','我感趣的','我趣的','我感兴的','我感兴趣的','我感兴趣的','我感兴趣的','我趣的','我感趣的','我趣的','我感兴的','我感兴趣的','我感兴趣的']
    }
  },
  methods:{
      xz(e){
          if(e.target.classList[0]==undefined){
              e.target.classList.add('sol')
          }else{
              e.target.classList.remove('sol')
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
.sol{
    border: 1px solid #2B75D9!important;
}
#inter{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .login_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    z-index: 999;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: white;
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
      font-size: px(30);
      font-weight: bold;
    }
  }
  .ix-top{
      height: 85%;
      position: relative;
      .ix-a{
        margin: px(198) 0 px(100) 0;
        font-size:px(50);
        font-weight:bold;
        color:rgba(51,51,51,1);
        text-align: center;
      }
      .ix-b{
          display: flex;
          justify-content: left;
          flex-wrap: wrap;
          div{
            height:px(70);
            border:1px solid rgb(153, 153, 153);
            border-radius:px(10);
            line-height: px(70);
            text-align: center;
            padding: 0 1%;
            margin: 1% 2%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            align-items: center;
            img{
                display: block;
                width: px(23);
                height: px(18);
                line-height: px(70);
            }
            span{
                word-wrap: nowrap;
                display: block;
            }
          }
      }
      .ix-c{
          position: absolute;
          bottom: 2%;
          width: 100%;
        p{
            font-size:px(30);
            font-weight:500;
            color:rgba(153,153,153,1);
            line-height:px(50);
            text-align: center;
            margin-bottom: px(25);
        }
        div{
            width: 92%;
            margin: 0 auto;
            height:px(90);
            background:rgba(43,117,217,1);
            border-radius:px(45);
            line-height: px(90);
            text-align: center;
            font-size:px(32);
            font-weight:500;
            color:rgba(255,255,255,1);
        }
      }
  }
}
</style>