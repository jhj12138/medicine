<template>
  <div id = "problem">
    <div class="problem_top">
      <div class="problem_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="problem_middle">常见问题</div>
    </div>
    <div class="problem_con">
      <div class="problem_li" v-for="(item,index) in list" :key = "index">
        <!-- <div class="problem_li_top" @click="goNum(item)" :class="item.flag?'problem_li_line':''"> -->
        <div class="problem_li_top" @click="goNum(item)">
          <div class="problem_li_left">{{item.Title}}</div>
          <div class="problem_li_right"><img src="../../assets/image/prob_img.png" alt=""></div>
        </div>
        <div class="problem_li_main" v-if = "item.flag">
          <div class="problem_li_mains">{{item.Content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ProblemList} from '../../api/home'
export default {
  data() {
    return{
      activeName: '1',
      nums:0,
      list:null,
      // list:[{
      //   Title:'标题1',
      //   Content:'你好，我的EAGLE 双击没有反应是怎么回事，以前遇到过一次，过一段时间又好了，过完年上来，又出问题了，到现在都打不开，重新装了软件，还是一样，打不开。',
      //   flag:false
      // },{
      //   Title:'标题2',
      //   Content:'你好，我的EAGLE 双击没有反应是怎么回事，以前遇到过一次，过一段时间又好了，过完年上来，又出问题了，到现在都打不开，重新装了软件，还是一样，打不开。',
      //   flag:false
      // },{
      //   Title:'标题3',
      //   Content:'你好，我的EAGLE 双击没有反应是怎么回事，以前遇到过一次，过一段时间又好了，过完年上来，又出问题了，到现在都打不开，重新装了软件，还是一样，打不开。',
      //   flag:false
      // },{
      //   Title:'标题4',
      //   Content:'你好，我的EAGLE 双击没有反应是怎么回事，以前遇到过一次，过一段时间又好了，过完年上来，又出问题了，到现在都打不开，重新装了软件，还是一样，打不开。',
      //   flag:false
      // }]
    }
  },
  methods:{
    goNum(item){
      item.flag = !item.flag
    },
    goReturn(){
      this.$router.push('/home')
    },
    ProblemList() {
      ProblemList().then((res) => {
        if (res.Success){
          res.Data.Data.forEach(ele=> {
            ele.flag = false
          })
          console.log(res.Data)
          this.list = res.Data.Data
          // console.log('11111',this.tabContents)
        } else {
          Toast(res.Msg)
        }
      })
    }
  },
  mounted(){
    this.ProblemList()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#problem{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background: #fff;
  .problem_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .problem_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .problem_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .problem_con{
    margin-top: px(100);
    padding: 0 px(20);
    .problem_li{
      border-bottom: 1px solid rgba(38,104,192,.1);
      .problem_li_top{
        height: px(90);
        display: flex;
        align-items: center;
        justify-content: space-between;
        // border-bottom: 1px solid rgba(38,104,192,.1);
        .problem_li_left{
          font-size: 16px;
          color: #222222;
        }
        .problem_li_right{
          width: px(33);
          img{width: 100%;}
        }
      }
      .problem_li_main{
        color: #565656;
        height: 100%;
        overflow: hidden;
        .problem_li_mains{
          margin: px(28) 0 px(50);
        }
      }
      .problem_li_news{
        color: #565656;
        height: 0;
        overflow: hidden;
        .problem_li_mains{
          margin: px(28) 0 px(50);
        }
      }
    }
    .problem_li_line{
      border-bottom: 1px solid rgba(38,104,192,.1);
    }
  }
}
</style>