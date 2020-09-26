<template>
  <div id = "onlinex">
      <div class="on-top">
          <div class="on-ta">
              <img src="../../assets/image/return-white.png" class="on-a" @click="goReturn">
              <div>
                  <img src="../../assets/image/ser.png" alt="">
                  <div class="shou" style="font-size:14px;color:#9A9A9A" @click="gosearch">搜索展商、商品</div>
                  <!-- <input type="text" placeholder="搜索展商、商品"> -->
              </div>
          </div>
          <div class="on-tb">
            <div class="on_video">
            <div class="on_video_swiper">
                <div class="swiper-containera">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper_item" v-for="(item,index) in swiper_list" :key="index">
                    <div class="on_video_top">
                        <img :src="item.ImgUrl" alt="">
                    </div>
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
            </div>
            </div> 
          </div>
      </div>
      <div class="on-mid">
          <div class="om-a">
              <span v-for="(item,ind) in it" :key="ind" @click="zo(ind)" :class="{'xuan':num==ind}">{{item}}</span>
          </div>
          <div class="om-b">
              <div class="omba" v-if="num==0">
                  <div class="om">
                      <div v-for="(item,ind) in list" :key="ind" @click="goDetail(item.cid)">
                        <p>{{item.Title}}</p>
                        <span>{{item.number}}</span>
                    </div>
                  </div>
              </div>
              <div class="omba" v-if="num==1">
                  <div class="om">
                      <div v-for="(item,ind) in list" :key="ind">
                        <p>{{item.name}}</p>
                        <span>{{item.lid}}</span>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {getsx, getobt, getoar} from '../../api/home'
export default {
  components:{Swiper,SwiperSlide},
  data() {
    return{
        swiper_list: null,
        it: ['商家', '行业'],
        num: 0,
        list: null
    }
  },
  methods:{
    goDetail(ids) {
      this.$router.push({ path: '/exhibitionxq', query: { Id: ids} })
    },
      gos () {
          if (this.num == 0) {
        getobt().then(res => {
          if (res.Success) {
            this.list = res.Data
          } else {
            this.$message.error(res.Msg)
          }
          console.log(res)
        })
        } else {
        getoar().then(res => {
            if (res.Success) {
                this.list = res.Data
            } else {
                this.$message.error(res.Msg)
            }
            console.log(res)
        })
        }
      },
      gosearch() {
          this.$router.push({ path: '/search'})
      },    
      goReturn() {
          this.$router.push({ path: '/home'})
      },
      zo(i) {
          this.num =i
          this.gos()
      },
      getsx(){
        getsx().then((res) => {
            if (res.Success){
            res.Data.forEach(ele=> {
                ele.ImgUrl = 'https://www.zjylz.com'+ele.ImgUrl
            })
            this.swiper_list = res.Data
            this.$nextTick(function () {
                this.Swipers()
            })
            // console.log(res)
            }
        })
    },
      Swipers() {
        new Swiper('.swiper-containera', {
        loop: true, // 循环模式选项
        // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
        })
        }
  },
  mounted () {
      this.getsx()
      this.gos()
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#onlinex{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
    .on-top{
        background: url(../../assets/image/online.png) no-repeat;
        background-size: cover;
        height: px(558);
        position: relative;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        .on-ta{
            padding-top: px(52);
            .on-a{
                width: px(21);
                position: absolute;
                left: px(25);
                top: px(66);
            }
            div{
                width: 83%;
                margin: 0 auto;
                height: px(66);
                background-color: white;
                border-radius: px(50);
                line-height: px(68);
                position: relative;
                img{
                    width: px(30);
                    vertical-align: middle;
                    position: absolute;
                    top: px(17);
                    left: px(16);z-index: 5;
                }
                input{
                    font-size: px(24);
                    color: #888888;
                    line-height: px(66);
                    vertical-align: middle;
                    height: px(66);
                    border-radius: px(50);
                    width: 90%;
                    border: none;
                    padding-left: 10%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
        }
        .on-tb{
            height: px(350);
            margin-top: px(50);
            .on_video{
                height: px(350);
                display: flex;
                flex-direction: column;
                .on_video_tit{
                padding: 0 px(20);
                font-size: 16px;
                margin:px(60) 0 px(27);
                }
                .on_video_swiper{
                flex: 1;
                margin: 0 px(20);
                background-color: white;
                .swiper-containera{
                    overflow: hidden;
                    height: px(320);
                    .swiper-pagination-bullets{
                        bottom: px(50)!important;
                    }
                    .swiper_item{
                    width: 100%;
                    height: px(300);
                    .on_video_top{
                        height: px(300);
                        width: 100%;
                        img{
                        width: 100%;
                        height: 100%;
                        }
                    }
                    .on_video_bottom{
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
        }
    }
    .on-mid{
        position: fixed;
        top: px(560);
        left: 0;
        width: 100%;
        height: 60%;
        .xuan{
            color: #2768C0!important;
        }
        .om-a{
            padding-top: px(21);
            display: flex;
            justify-content: space-around;
            padding: 0 px(50);
            border-bottom: 1px solid #EEEEEE;
            span{
                font-size: px(28);
                font-weight: 500;
                color: #222222;
                line-height: px(75);
            }
        }
        .om-b{
            height: 100%;
            overflow: scroll;
            .omba{
                width: 100%;
                height: 100%;
                .om{
                    height: 100%;
                    overflow: scroll;
                    div{
                        overflow: hidden;
                        padding: 0 px(40);
                        font-size: px(30);
                        font-weight: bold;
                        color: #565656;
                        line-height: px(88);
                        border-bottom: 1px solid #EEEEEE;
                        p{
                            float: left;
                        }
                        span{
                            float: right;
                            display: block;
                            color: #9A9A9A;
                        }
                    }
                }
            }
        }
    }
}
</style>