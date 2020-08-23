<template>
  <div id="home">
    <!-- 遮罩层 -->
    <Header :headFlag = 'flag'></Header>
    <div class="home_top">
      <div class="home_tit">
        <img src="../../assets/image/home_bg.png" alt="">
        <div class="home_tits">
          <div class="home_tit_left">
            <div class="home_titlec"><img src="../../assets/image/home_titlec.png" alt=""></div>
            <div class="home_titlee"><img src="../../assets/image/home_titlee.png" alt=""></div>
          </div>
          <div class="home_tit_right" @click="toFlag">
            <img src="../../assets/image/home_tit_btn.png" alt="">
          </div>
        </div>
        <div class="home_tit_text">让世界看到“浙江制造”</div>
      </div>
      <!-- 输入框 -->
      <div class="home_textbox">
        <div class="home_textboxs">
          <div class="home_textbox_left">
            <div class="home_textbox_lefts">
              <span>展品</span>
              <div class="home_textbox_img"><img src="../../assets/image/home_san.png" alt=""></div>
            </div>
          </div>
          <div class="home_textbox_right">
            <div class="home_textbox_shou"><img src="../../assets/image/home_shou.png" alt=""></div>
            <div class="home_textbox_input">
              <input type="text" placeholder="请输入关键词">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="home_textbox_tit" >
     <li 
      v-for="(item,index) in data_list" 
      :key = "item.name"
      :class="text_index == index?'home_active':''"
      @click="getActive(index)">{{item.name}}
      </li> 
    </ul>
    <div class="home_hall">
      <div class="home_hall_left">
        <span>网上展厅</span>
        <img src="../../assets/image/home_hall1.png" alt="">
      </div>
      <div class="home_hall_right">
        <div class="home_hall_top">
          <span>立即参展</span>
          <img src="../../assets/image/home_hall2.png" alt="">
        </div>
        <div class="home_hall_bottm">
          <span>立即采购</span>
          <img src="../../assets/image/home_hall3.png" alt="">
        </div>
      </div>
    </div>
    <div class="home_box"></div>
    <!-- 首页选项卡 -->
    <div class="home_tab">
      <ul>
        <li 
        v-for="(item,index) in tab_li"
        :key  = "item.name"
        :class="num == index?'home_tab_active':''"
        @click="getNum(index)">{{item.name}}</li>
      </ul>
      <div class="home_tabcon">
        <div 
        v-for="(itemCon,index) in tabContents"
        :key = "index"
        v-show="index == num"
        >
          <div 
          v-for="(itemList,index2) in itemCon.tabName"
          :key = "index2"
          class="home_tab_list">
            <div class="home_tab_tit">{{itemList.tit}}</div>
            <div class="home_tab_time">
              <div class="home_tab_img">
                <img src="../../assets/image/home_time.png" alt="">
              </div> 
              <span>{{itemList.times}}</span>
            </div>
          </div>
          <!-- 查看更多 -->
          <div class="home_more">
            <div class="home_more_img1">
              <img src="../../assets/image/home_more_img1.png" alt="">
            </div>
            <div class="home_more_img">
              <img src="../../assets/image/home_more_ing.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 交流展会 -->
    <div class="home_inform">
      <img src="../../assets/image/home_inform.png" alt="">
      <div class="home_inform_tit">浙江国际科研、医疗仪器设备技术交流展览会</div>
      <div class="home_inform_con">
        <div class="home_inform_top">
          <div class="home_inform_region">
            <div class="home_region_top">
              <span>200</span>
              <span>个</span>
              <span>+</span>
            </div>
            <div class="home_region_bottom">国家、地区和组织</div>
          </div>
          <div class="home_inform_region">
            <div class="home_region_top">
              <span>100</span>
              <span>个</span>
              <span>+</span>
            </div>
            <div class="home_region_bottom">累计参展商</div>
          </div>
        </div>
        <div class="home_inform_middle">
          <img src="../../assets/image/home_heng.png" alt="">
        </div>
        <div class="home_inform_top">
          <div class="home_inform_region">
            <div class="home_region_top">
              <span>8000</span>
              <span>万</span>
              <span>+</span>
            </div>
            <div class="home_region_bottom">累计交易额</div>
          </div>
          <div class="home_inform_region">
            <div class="home_region_top">
              <span>2000</span>
              <span>人</span>
              <span>+</span>
            </div>
            <div class="home_region_bottom">累计进场人数</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频中心 -->
    <div class="home_video">
      <div class="home_video_tit">视频中心</div> 
      <div class="home_video_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper_item" v-for="(item,index) in swiper_list" :key="index">
              <div class="home_video_top">
                <img src="../../assets/image/home_video.png" alt="">
              </div>
              <div class="home_video_bottom">
                <span>{{item.name}}</span>
                <span>大咖讲座等你来</span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div> 
    <!-- 往期回顾 -->
    <div class="home_review">
      <img src="../../assets/image/home_review.png" alt="">
      <div class="home_review_tit">往期回顾</div>
        <div class="making_activitys_scroll">
          <div class="making_activitys_lists">
            <div class="making_activitys_list"
            v-for="(item,index) in review_list" 
            :key = "index"
            @click="getReview(index)">
              <img src="../../assets/image/home_review_list.png" alt="">
              <div class="home_review_flag"
              :class="review_index == index?'home_review_flags':''">
                <div class="home_review_time">
                  <div class="home_review_data">
                    <span>{{item.time}}</span>
                    <span>th</span>
                  </div>
                  <div class="home_review_e">hangzhou</div>
                </div>
                <div class="home_review_bottom">
                  <img src="../../assets/image/home_reviews.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 品牌合作 -->
    <div class="home_coop">
      <div class="home_coop_tit">品牌合作</div> 
      <div class="home_coop_swiper">
        <div class="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper_item" v-for="(item,index) in swiper_list" :key="index">
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop1.png" alt="">
              </div>
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop2.png" alt="">
              </div>
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop3.png" alt="">
              </div>
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop3.png" alt="">
              </div>
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop5.png" alt="">
              </div>
              <div class="home_coop_list">
                <img src="../../assets/image/home_coop6.png" alt="">
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components:{Header,Swiper,SwiperSlide,Footer},
  data() {
    return {
      flag: false,
      data_list:[{name:'针管'},{name:'呼吸机'},{name:'保健器材'},{name:'医用保健'}], 
      text_index:0,
      tab_li:[{name:'展会动态'},{name:'国际合作'},{name:'政府采购'},{name:'学术论坛'},{name:'资料下载'}],
      num:0,
      review_index:0,
      tabContents:[{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷”',
          times:'2020-08-16'
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷2”',
          times:'2020-08-16'
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷4”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        }]
      },{
        tabName:[{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷5”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        },{
          tit:'国产医疗器械“成功突围” 浙江交出自己的“答卷3”',
          times:'2020-08-16'
        }]
      }],
      swiper_list:[{name:'学术讲座'},{name:'学术讲座'},{name:'学术讲座'},{name:'学术讲座'}],
      review_list:[{time:'15'},{time:'16'},{time:'17'}]
    }
  },
  methods: {
    // 跳转回首页
    toFlag() {
      this.flag = true
    },
    getActive(index){
      this.text_index = index
    },
    getNum(index) {
      this.num = index;
    },
    getReview(index) {
      this.review_index = index
    }
  },
  mounted:function(){
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    }),
    new Swiper('.swiper-container2', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}

#home{
  background:#fff;
  overflow-x: hidden;
  position: relative;
  .home_top{
    height: px(844);
    width: 100%;
    position: relative;
    .home_tit{
      height: 100%;
      width: 100%;
      position: relative;
      left: 0;
      top:0;
      height: px(810);
      >img{
        width: 100%;
        height: 100%;
      }
      .home_tits{
        padding: 0 px(20);
        position: absolute;
        width: 100%;
        left: 0;
        top:px(60);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home_tit_left{
          display: flex;
          flex-direction: column;
          color: #FFFFFF;
          .home_titlec{
            width: px(353);
            img{
              width: 100%;
            }
          }
          .home_titlee{
            width: px(434);
            margin-top: px(5);
            img{
              width: 100%;
            }
          }
        }
        .home_tit_right{
          width: px(56);
          img{
            width: 100%;
          }
        }
      } 
      .home_tit_text{
        font-size:18px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:75px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .home_textbox{
      width: 100%;
      padding: 0 px(20);
      position: absolute;
      bottom: 0;
      // top: px(736);
      // height: px(96);
      .home_textboxs{
        height: px(68);
        background:rgba(255,255,255,1);
        box-shadow:1px 4px 21px 0px rgba(15,44,127,0.15);
        border-radius:px(30);
        display: flex;
        align-items: center;
        .home_textbox_left{
          height: 100%;
          width: px(128);
          display: flex;
          align-items: center;
          justify-content: center;
          .home_textbox_lefts{
            width: 100%;
            border-right: 1px solid rgba(191,191,191,1);
            display: flex;
            align-items: center;
            justify-content: center;
            span{
              font-size: 14px;
              color: #222222;
              text-align: center;
              margin-right: px(5);
            }
            .home_textbox_img{
              width: px(11);
              img{
                width: 100%;
              }
            }
          }
          
          //
        }
        .home_textbox_right{
          display: flex;
          align-items: center;
          padding-left: px(46);
          .home_textbox_shou{
            width: px(23);
            img{
              width: 100%;
            }
          }
          .home_textbox_input{
            margin-left: px(11);
            input{
              border: none;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .home_textbox_tit{
    height: px(62);
    display: flex;
    align-items: center;
    width: 100%;
    padding: px(11) px(20) px(20);
    li{
      font-size:12px;
      font-weight:400;
      color:rgba(132,140,152,1);
      margin-left: px(35);
    }
    li.home_active{
      color: #2B76D9;
    }
  }
  .home_hall{
    height: px(328);
    padding: 0 px(20);
    margin-bottom: px(40);
    display: flex;
    justify-content: space-between;
    .home_hall_left{
      width: px(345);
      position: relative;
      span{
        font-size:18px;
        font-weight:bold;
        color:rgba(250,250,250,1);
        position: absolute;
        left: px(30);
        top: px(32);
      }
      img{
        width: 100%;
      }
    }
    .home_hall_right{
      width: px(348);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .home_hall_top{
        height: px(154);
        width: 100%;
        position: relative;
        span{
          font-size:18px;
          font-weight:bold;
          color:rgba(250,250,250,1);
          position: absolute;
          left: px(30);
          top: px(32);
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      .home_hall_bottm{
        height: px(154);
        width: 100%;
        position: relative;
        span{
          font-size:18px;
          font-weight:bold;
          color:rgba(250,250,250,1);
          position: absolute;
          left: px(30);
          top: px(32);
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .home_box{
    height: px(20);
    width: 100%;
    background: rgba(234,234,234,.6);
  }
  .home_tab{
    background: #f5f7fa;
    ul{
      height: px(80);
      padding: 0 px(20);
      border-bottom: 1px solid #E0EAF7;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 13px;
      color: #888888;
      li{
        margin-right: px(33);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .home_tab_active{
        // position: absolute;
        border-bottom: 2px solid #2573DF;
        font-size: 16px;
        color: #2573DF;
      }
    }
    .home_tabcon{
      padding: 0 px(20) px(60);
      margin-top: px(30);
      color: #222222;

      .home_tab_list{
        height:px(164);
        background:rgba(255,255,255,1);
        border-radius:px(10);
        margin-bottom: px(20);
        padding:px(30) px(30) px(48);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .home_tab_time{
          display: flex;
          align-items: center;
          .home_tab_img{
            width: px(24);
            height: px(24);
            img{
              width: 100%;
              height: 100%;
            }
          }
          span{
            line-height: 1;
            font-size: 12px;
            color: #888888;
            margin-left:px(9);
          }
        }
      }
      .home_more{
        width:px(170);
        height:px(50);
        background:rgba(43,117,217,1);
        border-radius:px(25);
        font-size: 12px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        padding: 0 px(30);
        justify-content: space-between;
        margin:px(47) auto 0;
        .home_more_img{
          width: px(26);
          img{
            width: 100%;
          }
        }
        .home_more_img1{
          width: px(66);
          img{
            width: 100%;
          }
        }
      }
    }
  }
  .home_inform{
    width: 100%;
    height: px(450);
    position: relative;
    color:rgba(254,254,254,1);
    img{
      width: 100%;
      height: 100%;
    }
    .home_inform_tit{
      font-size: 16px;
      font-weight:bold;
      position: absolute;
      line-height: 1;
      top:px(60);
      width: 100%;
      text-align: center;
    }
    .home_inform_con{
      position: absolute;
      width: 100%;
      left: 0;
      top:px(159);
      padding: 0 px(110);
      .home_inform_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home_inform_region{
          display: flex;
          flex-direction: column;
          align-items: center;
          .home_region_top {
            span:nth-of-type(1){
              font-size: 22px;
              font-weight:bold;
            }
          }
          .home_region_bottom{
            font-size: 12px;
          }
        }
      }
      .home_inform_middle{
        margin:px(37) 0;
      }
    }
  }
  .home_video{
    background: #f5f7fa;
    height: px(577);
    display: flex;
    flex-direction: column;
    .home_video_tit{
      padding: 0 px(20);
      font-size: 16px;
      margin:px(60) 0 px(27);
    }
    .home_video_swiper{
      flex: 1;
      padding: 0 px(60);
      .swiper-container{
        height: 100%;
        .swiper_item{
          width: 100%;
          .home_video_top{
            height: px(279);
            width: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .home_video_bottom{
            height: px(104);
            width: 100%;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            span:nth-of-type(1){
              font-size: 16px;
              margin-top:px(18);
              line-height: 1;
            }
            span:nth-of-type(2){
              font-size: 14px;
              color:#555555
            }
          }
        }
      }
    }
  }
  .home_review{
    height: px(620);
    width: 100%;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .home_review_tit{
      position: absolute;
      top:px(60);
      padding: 0 px(20);
      font-size: 16px;
      color:#fff;
      line-height: 1;
    }
    .making_activitys_scroll{
      // overflow-x: hidden;
      position:absolute;
      width:100%;
      top:px(113);
      // margin-top: px(113);
      .making_activitys_lists{
        display: flex;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
        padding-left: px(20);
        .making_activitys_list{
          width:px(320);
          height:px(440);
          flex:none;
          margin-right: px(20);
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .home_review_flag{
            position: absolute;
            background:linear-gradient(38deg,rgba(0,0,0,0.89) 0%,rgba(60,69,115,0.7) 100%);
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            padding:px(52) px(51) px(64);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .home_review_time{
              color:#fff;
              .home_review_data{
                display: flex;
                align-items: flex-start;
                span:nth-of-type(1){
                  font-size: 26px;
                  line-height: 1;
                  font-weight: bold;
                  margin-right: px(7);
                }
              }
              .home_review_e{
              margin-top:px(26);
              line-height: 1;
              }
            }
            .home_review_bottom{
              width: px(27);
              img{
                width: 100%;
              }
            }
          }
          .home_review_flags{
            background:linear-gradient(38deg,rgba(2,31,179,1) 0%,rgba(34,44,102,0.7) 100%);
          }
        }
      }
    }
  }
  .home_coop{
    // height: px(440);
    background: #f5f7fa;
    display: flex;
    flex-direction: column;
    padding-bottom: px(90);
    position: relative;
    .home_coop_tit{
      padding: 0 px(20);
      font-size: 16px;
      margin:px(60) 0 px(27);
    }
    .home_coop_swiper{
      padding: 0 px(20);
      height: 100%;
      flex: 1;
      .swiper-container2{
        height: 100%;
        .swiper-wrapper{
          height: 100%;
          .swiper_item{
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            // justify-content: space-between;
            .home_coop_list{
              width: px(222);
              height: px(116);
              margin:0 px(22) px(10) 0;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .home_coop_list:nth-child(3n){
              margin-right: px(0);
            }
          }
        }
        .swiper-pagination-bullets{
          bottom: px(60);
        }
      }
    }
  }
}
</style>