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
        @click="getNum(index,item.classid)">{{item.name}}</li>
      </ul>
      <div class="new_tabcon">
        <div class="new_tabcons" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
          <div 
          class="new_tab_a"
          >
            <div 
              v-for="(itemList,index2) in tabContents"
              :key = "index2"
              class="new_tab_list"
              @click="goDetail(itemList.ID)">
              <div class="new_tab_time">{{itemList.ShowDate}}</div>
              <div class="new_tab_tit">{{itemList.Title}}</div>
              <div class="new_tab_con">{{itemList.Content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header'
import {newsList} from '../../api/home'
import { Toast } from 'vant';
export default {
  components:{Header},
  data() {
    return{
      flag: false,
      busy: false,
      CurPage:0,
      PageSize:5,
      tab_li:[{name:'展会动态',classid:'9'},{name:'国际合作',classid:'10'},{name:'学术论坛',classid:'12'}],
      num:0,
      tabContents:[],
      clsId: null
    }
  },
  methods:{
    toFlag() {
      this.flag = true
    },
    goDetail(ids) {
      this.$router.push({ path: '/newsform', query: { Id: ids,clsId:this.clsId} })
    },
    changeFlag(){
      this.flag = false
    },
    getNum(index,classId) {
      this.busy = false
      this.tabContents =[]
      this.CurPage = 1
      if(index){
        this.num = index;
      } else if (index == 0){
        this.num = 0
      }
      if (classId) {
        this.clsId = classId
      }
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        classid: this.clsId
      }
      newsList(data).then((res) => {
        if (res.Success){
          res.Data.Data.forEach(ele => {
            this.tabContents.push(ele)
          })
        } else {
          Toast(res.Msg)
        }
      })
    },
    loadMore() {
      // this.tabContents =[]
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        classid:this.clsId
      }
      console.log(data)
      newsList(data).then((res) => {
        this.busy = false
        console.log('jhjhjhjhj',this.busy)
        if (res.Success){
          // setTimeout(() => {
          if (res.Data.Data.length >0) {
            res.Data.Data.forEach(ele => {
              this.tabContents.push(ele)
            })
          } else {
            this.busy = true
          }
          console.log('this.tabContents',this.tabContents)
          // this.busy = false
          
            // this.busy = false
          // }, 1000)
        } else {
          Toast(res.Msg)
        }
      })
    },
    getQuery(){
      this.clsId = this.$route.query.Id
      if(this.clsId == 9 ) {
        this.num = 0
      } else if (this.clsId == 10){
        this.num = 1
      } else if (this.clsId == 12){
        this.num = 2
      }
    }
  },
  mounted(){
    this.getQuery()
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
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  .news_top{
    height: px(230);
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
        // margin-bottom:px(100) ;
        .news_top_left{
          display: flex;
          flex-direction: column;
          // margin-bottom:px(30) ;
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
      top:75%;
      font-size: 18px;
      transform: translate(-50%,-50%);
    }
    .news_top_txt2{
      position: absolute;
      left: 50%;
      top:95%;
      font-size: 16px;
      transform: translate(-50%,-50%);
    }
  }
  .news_tab{
    flex:1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
      // flex:1;
      // flex-wrap:wrap;
      // height: 100px;
      flex: 1;
      overflow: hidden;
      .new_tabcons{
        height: 100%;
        overflow-y:scroll ;
        .new_tab_a{
          // margin-bottom: px(50);
        }
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
        .new_tab_list:last-child{
          padding-bottom:0 !important;
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
}

</style>