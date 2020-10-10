<template>
  <div id ="commodity">
    <div class="commodity_top">
      <div class="commodity_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="commodity_middle">商品信息</div>
      <div class="commodity_right" @click="delites">管理</div>
    </div>
    <div class="commodity_con">
      <ul>
        <li
        v-for="(item,index) in list "
        :key = "index"
        >
          <div class="commodity_li_top">
            <div class="commodity_li_left">
              <van-checkbox v-model="item.checked" @click="getList(item,item.checked,index)" icon-size="15px"></van-checkbox>
              <div class="commodity_li_name">{{index + 1}}</div>
              <div class="commodity_li_jin">
                <!-- <span>已上架</span> -->
              </div>
            </div>
            <div class="commodity_li_right">
              <span @click="gogoodsxq(item.Pid,index)">{{lists}}</span>
              <div class="commodity_li_img">
                <img src="../../assets/image/mine_go.png" alt="">
              </div>
            </div>
          </div>
          <div class="commodity_li_bottom">
            <div class="commodity_lis_left">
              <div class="commodity_li_txt1">
                <span><div class="commodity_li_n">商品名称:<span></span></div>{{item.name}}</span>
                <span><div class="commodity_li_n">价格:<span></span></div>{{item.Price}}</span>
                <span><div class="commodity_li_n">描述:<span></span></div><div class="commodity_li_n_ys">{{item.Summary}}</div></span>
              </div>
              <div class="commodity_li_time"><div class="commodity_li_n">发布时间<span></span></div>：{{item.addtime}}</div>
            </div>
            <div class="commodity_lis_right">
              <img :src="imgurl[index]" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom" @click="goRel">添加商品</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {Obtaincommodity,DELcommodity} from "../../api/home"
export default {
  data() {
    return{
      cid:null,
      list:[],
      imgurl:[],
      lists:"编辑",
      compiles:true,
    }
  },
  mounted(){
    this.Obtaincommodity()
  },
  methods:{
    delites(){
      if(this.compiles){
        this.lists= "编辑"
        this.compiles = false
      }else{
        this.lists= "删除"
        this.compiles = true
      }
    },
    gogoodsxq(Pid,sum){
      console.log(Pid)
      if(this.lists=="编辑"){
      this.$router.push({ path: '/comrel', query: { Id: Pid ,sum:sum} })
      }else{
        DELcommodity({Pid}).then(res=>{
          Toast(res.Msg)
          this.$router.go(0)
        })
      }
    },
    Obtaincommodity(){
      this.cid = JSON.parse(sessionStorage.cidInfo)
      var data = {
        cid: this.cid.cid
      }
      Obtaincommodity(data).then(res=>{
       this.list=res.Data.Data
       res.Data.Data.forEach(ele => {
         if(ele.ImgList.split('&&')[0].split('.')[1] == "png"){
          this.imgurl.push('https://www.zjylz.com' + ele.ImgList.split('&&')[0])
         }else{
           this.imgurl.push(ele.ImgList.split('&&')[0])
         }
        console.log(ele.ImgList.split('&&')[0])
        // this.imgurl.push(ele.ImgList.split('&&')[0])
       });
       console.log(this.list)
      })
    },
    getList(item,checked,index){
      // if(checked){

      // }
      // console.log(index)
      // console.log(item)
    },
    goReturn() {
      this.$router.push('/mine') 
    },
    goRel() {
      // Toast('请前往pc版添加商品信息')
      this.$router.push('/comrel')  //跳转到商品发布
    }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.commodity_li_n_ys{
  width: px(300);
   white-space: nowrap; /* 规定文本是否折行 */
  overflow: hidden; /* 规定超出内容宽度的元素隐藏 */
  text-overflow: ellipsis;
}
#commodity{
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
  .commodity_con{
    padding:px(130) 0;
    margin:0 px(20);
    ul{
      li{
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .commodity_li_top{
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
          .commodity_li_right{
            display: flex;
            align-items: center;
            span{
              color: #2667BF;
            }
            .commodity_li_img{
              width: px(9);
              margin-left: px(11);
              img{
                width: 100%;
              }
            }
          }
        }
        .commodity_li_bottom{
          padding: px(30) 0 px(40);
          line-height: 1;
          display: flex;
          justify-content: space-between;
          height: 100%;
          .commodity_lis_left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #565656;
            .commodity_li_txt1{
              display: flex;
              flex-direction: column;
              >span{
                display: block;
                display: flex;
                margin-bottom: px(-10);
                .commodity_li_n{
              //  white-space: nowrap; /* 规定文本是否折行 */
              //  overflow: hidden; /* 规定超出内容宽度的元素隐藏 */
              //  text-overflow: ellipsis;
                  width: px(120);
                  text-align: justify;
                  >span{
                    width: 100%;
                    display: inline-block;
                  }
                }
              }
            }
            .commodity_li_time{
              display: flex;
              margin-bottom: px(-30);
              .commodity_li_n{
                text-align: justify;
                width: px(120);
                >span{
                    width: 100%;
                    display: inline-block;
                  }
              }
            }
          }
          .commodity_lis_right{
            width: px(210);
            border-radius: px(10);
            img{width: 100%;}
          }
        }
      }
    }
  }
  .stand_bottoms{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px(100);
    background: #fff;
    .stand_bottom{
      width: px(710);
      height: px(87);
      position: absolute;
      // bottom: px(12);
      left: 50%;
      transform: translateX(-50%);
      background: #2668C0;
      border-radius: px(6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
    }
  }
  @media(max-width: 340px){
    .commodity_li_n{
      width: px(150) !important;
    } 
  }
}
</style>