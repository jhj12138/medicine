<template>
  <div id = "news">
    <!-- 遮罩层 -->
    <Header :headFlag = 'flag' class="news_header" @changeFlag = "changeFlag"></Header>
    <div class="news_top">
      <div class="news_tit">
        <div class="news_tits">
          <div class="news_top_left">
            <div class="news_titlec"><img src="../../assets/image/news_titlec.png" alt=""></div>
            <div class="news_titlee"><img src="../../assets/image/news_titlee.png" alt=""></div>
          </div>
          <div class="new_tit_right" @click="toFlag">
            <img src="../../assets/image/news_num.png" alt="">
          </div>
        </div>
      </div>
      <div class="news_top_txt1">新闻动态</div>
      <div class="news_top_txt2">news</div>
    </div>
    <div class="news_tab">
      <ul>
        <li 
        v-for="(item,index) in tab_li"
        :key  = "item.name"
        :class="num == index?'new_tab_active':''"
        @click="getNum(index)">{{item.name}}</li>
      </ul>
      <div class="new_tabcon">
        <div 
        v-for="(itemCon,index) in tabContents"
        :key = "index"
        v-show="index == num"
        >
          <div 
            v-for="(itemList,index2) in itemCon.tabName"
            :key = "index2"
            class="new_tab_list">
            <div class="new_tab_time">08-12</div>
            <div class="new_tab_tit">{{itemList.tit}}</div>
            <div class="new_tab_con">由浙江省卫生健康委员会和浙江省科学技术厅主办的第32届浙江国际科研、医疗仪器设备...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header'
export default {
  components:{Header},
  data() {
    return{
      flag: false,
      tab_li:[{name:'展会动态'},{name:'展会动态'},{name:'展会动态'}],
      num:0,
      tabContents:[{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
        }]
      }],
    }
  },
  methods:{
    toFlag() {
      this.flag = true
    },
    changeFlag(){
      this.flag = false
    },
    getNum(index) {
      this.num = index;
    },
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#news{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .news_top{
    height: px(400);
    width: 100%;
    position: relative;
    background: #FFFFFF;
    .news_tit{
      height: 100%;
      width: 100%;
      position: relative;
      left: 0;
      top:0;
      padding: 0 px(20);
      .news_tits{
        padding: 0 px(20);
        position: absolute;
        width: 100%;
        left: 0;
        top:px(60);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .news_top_left{
          display: flex;
          flex-direction: column;
          color: #FFFFFF;
          .news_titlec{
            width: px(353);
            img{
              width: 100%;
            }
          }
          .news_titlee{
            width: px(434);
            margin-top: px(5);
            img{
              width: 100%;
            }
          }
        }
        .new_tit_right{
          width: px(56);
          img{
            width: 100%;
          }
        }
      }
    }
    .news_top_txt1{
      position: absolute;
      left: 50%;
      top:60%;
      font-size: 18px;
      transform: translate(-50%,-50%);
    }
    .news_top_txt2{
      position: absolute;
      left: 50%;
      top:70%;
      font-size: 16px;
      transform: translate(-50%,-50%);
    }
  }
  .news_tab{
    ul{
      height: px(120);
      padding: 0 px(20);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #222222;
      background: #FFFFFF;
      li{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex:1
      }
      .new_tab_active{
        border-bottom: 2px solid #2573DF;
        font-size: 16px;
        color: #2573DF;
      }
    }
    .new_tabcon{
      padding:px(30) px(20) 0;
      .new_tab_list{
        width: 100%;
        background: #FFFFFF;
        margin-bottom: px(30);
        padding: px(62) px(60) px(60);
        .new_tab_time{
          font-size: 25px;
          color: #565656;
          line-height: 1;
          margin-bottom: px(62);
        }
        .new_tab_tit{
          line-height: 1;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: px(60);
        }
        .new_tab_con{
          color: #888888;
          overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 3;
			    -webkit-box-orient: vertical;
        }
      }
    }
  }
}

</style>