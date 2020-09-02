<template>
  <div id = "hotCourse">
    <div class="login_top">
      <div class="login_return" @click="goReturn">
        <img src="../../assets/image/return-white.png" alt="">
      </div>
      <div class="login_middle"></div>
    </div>
    <div class="login_con">
        <div class="new_top">
            <video :src="VideoUrl" controls="none" class="none"></video>
            <div class="ho-a"></div>
            <img src="../../assets/image/bof.png" alt="" class="ho-b" @click="bof()">
            <div class="ho-ze"></div>
            <div class="he-zi">
                <p>{{Title}}</p>
                <div>
                    <span>浏览量：{{ViewNum}}次</span>
                    <span>课程时长：{{Time}}分钟</span>
                    <span>发布时间：{{PubTime}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="hot-top">
        <div class="hot-a">
            <span @click="ao()" class="los">互动留言</span>
            <span @click="ab()">热门课程</span>
        </div>
        <div class="hot-b">
            <div class="hot-c" v-show="indd==0">
                <div class="hot-ca">
                    <p v-for="(item,index) in list" :key="index">
                        <span>{{item[0]}}</span>
                        <span>{{item[1]}}</span>
                    </p>
                </div>
                <div class="hot-cb">
                    <input type="text" placeholder="留下您的想法...">
                    <div>发送</div>
                </div>
            </div>
            <div class="hot-d" v-show="indd==1" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-throttle-delay=“500”>
                <div class="hot-da" v-for="(item,index) in conList" :key="index">
                    <img :src="item.ImgUrl" alt="">
                    <div>{{item.Title}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {lessionDetail,lessionCommentList,lessionHotlist} from '../../api/home'
export default {
  data() {
    return{
        indd:0,
        PubTime:null,
        Title:null,
        VideoUrl:null,
        ViewNum:null,
        ids:null,
        Time:null,
        conList:null,
        LessionId:null,
        busy: false,
        CurPage:0,
        PageSize:5,
        list:[
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容'],
            ['瑞士ICO精密医疗器械：','评论内容评论内容评论内容'],
            ['瑞士ICO：','评论内容评论内容评论内容']
        ]
    }
  },
  methods:{
    goReturn(){
      this.$router.push('/themeList')
    },
    bof(){
        var vid=document.getElementsByClassName("none")[0]
        var hoa=document.getElementsByClassName("ho-a")[0]
        var hob=document.getElementsByClassName("ho-b")[0]
        var hoz=document.getElementsByClassName("ho-ze")[0]
        var hoi=document.getElementsByClassName("he-zi")[0]
        if(vid.paused){
            vid.play()
            hoa.style.display='none'
            hoz.style.display='none'
            hoi.style.display='none'
            hob.style.opacity='0'
        }else{
            vid.pause()
            hoa.style.display='block'
            hoz.style.display='block'
            hoi.style.display='block'
            hob.style.opacity='1'
        }
    },
    ao(){
        this.indd=0;
        var ho=document.getElementsByClassName('hot-a')[0].children[0]
        ho.classList.add('los')
        var ho=document.getElementsByClassName('hot-a')[0].children[1]
        ho.classList.remove('los')
    },
    ab(){
        this.indd=1;
        var ho=document.getElementsByClassName('hot-a')[0].children[1]
        ho.classList.add('los')
         var ho=document.getElementsByClassName('hot-a')[0].children[0]
        ho.classList.remove('los')
    },
    lessionDetail() {
        const data = {
            Id :this.$route.query.Id
        }
        lessionDetail(data).then((res) => {
            if (res.Success){
                this.LessionId = res.Data.Id
                this.PubTime = res.Data.PubTime.slice(0,10)
                this.Time = res.Data.Time
                this.Title = res.Data.Title
                this.VideoUrl = 'http://yzh.68hanchen.com'+res.Data.VideoUrl
                this.ViewNum = res.Data.ViewNum
            console.log(res)
            } else {
            Toast(res.Msg)
            }
        })
    },
    loadMore() {
      this.busy = true
      this.CurPage ++
      const data = {
        CurPage: this.CurPage,
        PageSize: this.PageSize,
        LessionId:this.$route.query.Id
      }
      console.log(data)
      lessionCommentList(data).then((res) => {
        this.busy = false
        if (res.Success){
          if (res.Data.Data.length >0) {
            // console.log('zmzmzmzm',res.Data.Data)
          } else {
            this.busy = true
          }
          console.log('this.tabContents',this.tabContents)
        } else {
          Toast(res.Msg)
        }
      })
    },
    lessionHotlist() {
        lessionHotlist().then((res) => {
            if (res.Success){
                console.log('hdsafa',res.Data)
                res.Data.forEach(ele => {
                    ele.ImgUrl = 'http://yzh.68hanchen.com'+ele.ImgUrl
                    ele.PubTime = ele.PubTime.slice(0,10)
                })
                this.conList = res.Data
                } else {
                Toast(res.Msg)
            }
        })
    }
  },
  mounted(){
      this.lessionDetail()
      this.lessionHotlist()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.los{
    color:#2C76D9!important;
    border-bottom: 2px solid #2C76D9!important;
}
#hotCourse{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background: #f5f7fa;
  // background-color: #f5f7fa;
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
    background: black;
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
  .login_con{
    width: 100%;
    height: 31%;
    position: fixed;
    top: 0;
    left: 0;
    .new_top{
        margin-top: px(100);
        position: relative;
        height: 100%;
        overflow: hidden;
        video{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: fill;
        }
        .ho-a{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: px(422);
        }
        .ho-b{
            position: absolute;
            top: 33%;
            left: 42%;
            z-index: 6;
            width: 15%;
        }
        .ho-ze{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: .6;
            z-index: 3;
        }
        .he-zi{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 15;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(194, 194, 194,0));
            p{
                padding-left: 4%;
                font-size:px(26);
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:px(75);
            }
            div{
                padding-bottom: 2%;
                padding-left: 4%;
                span{
                    padding-right: 5%;
                    font-size:px(20);
                    color:rgba(255,255,255,1);
                    line-height:px(34);
                }
            }
        }
    }
  }
  .hot-top{
      height: 61%;
      position: fixed;
      top: 39%;
      left: 0;
      width: 100%;
      .hot-a{
          display: flex;
          justify-content: space-between;
          padding: 0 24%;
          height: 10%;
          span{
            display: inline-block;
            font-size:px(26);
            font-weight:bold;
            color:rgba(34,34,34,1);
            line-height:px(75);
            border-bottom: 2px solid transparent;
          }
      }
      .hot-b{
          height: 100%;
          background:rgba(245,247,250,1);
          .hot-c{
              height: 100%;
              overflow: scroll;
              .hot-ca{
                  height: 100%;
                  overflow: scroll;
                  p{
                      margin: px(15);
                  }
              }
              .hot-cb{
                  background:rgba(255,255,255,1);
                  width: 100%;
                  position: fixed;
                  bottom: 0;
                  left: 0;
                  overflow: hidden;
                  input{
                    width: 57%;
                    padding-left: 5%;
                    height:px(73);
                    background:rgba(245,247,250,1);
                    border:1px solid rgba(229,229,229,1);
                    border-radius:px(5);
                    margin: px(16) 4%;
                    float: left;
                  }
                  div{
                    width: 30%;
                    height:px(73);
                    float: right;
                    margin: px(16) 4% px(16) 0;
                    background:rgba(43,117,217,1);
                    border-radius:px(5);
                    font-size:px(34);
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:px(75);
                    text-align: center;
                  }
              }
          }
          .hot-d{
              overflow: scroll;
              height: 90%;
              .hot-da{
                  width: 46%;
                  margin: 2% 2%;
                  background-color: white;
                  border-radius: px(10);
                  float: left;
                  img{
                      width: 100%;
                      height: px(202);
                  }
                  div{
                    font-size:px(24);
                    font-weight:bold;
                    color:rgba(34,34,34,1);
                    line-height:px(34);
                    margin: 3% 5%;
                    padding: 2% 0;
                  }
              }
          }
      }
  }
}
</style>