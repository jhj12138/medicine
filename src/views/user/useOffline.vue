<template>
  <div id="useoffline">
    <div class="commodity_top">
      <div class="commodity_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="" />
      </div>
      <div class="commodity_middle">报名的线下活动</div>
      <div class="commodity_right" @click="change">管理</div>
    </div>
    <div class="message_con">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="message_li_top">
            <div class="message_li_left">
              <van-checkbox
                v-model="item.checked"
                @click="getList(item, item.checked, index)"
                icon-size="15px"
              ></van-checkbox>
              <div class="message_li_name">{{ item.ActivityName }}</div>
              <div class="message_li_jin">
                <span>{{ item.Status }}</span>
              </div>
              <div class="message_li_right">
                <span @click="goxq(item.ActivityId)" v-if="flag">详情</span>
                <span @click="del(item.Id)" v-else >删除</span>
                <div class="message_li_img">
                  <img src="../../assets/image/mine_go.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="message_li_bottom">
            <div class="message_li_span">
              <div class="message_li_tit">地点<span></span></div>
              ：<span>{{ item.Address }}</span>
            </div>
            <div class="message_li_span">
              <div class="message_li_tit">类型<span></span></div>
              ：<span>{{ item.Type }}</span>
            </div>
            <div class="message_li_span">
              <div class="message_li_tit">报名时间<span></span></div>
              ：<span>{{ item.CreateTime }}</span>
            </div>
            <div class="message_li_span">
              <div class="message_li_tit">活动时间<span></span></div>
              ：<span
                >{{ item.ActivityTime }} -- {{ item.ActivityTimeEnd }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { activities, delactivities } from "../../api/user";
export default {
  data() {
    return {
      list: [],
      flag: true,
      flags:true,
    };
  },
  mounted() {
    this.activities();
  },
  methods: {
    goxq(id){
      this.$router.push({path:"/offlinedetail",query:{Id:id,flags:this.flags}})
    },
    change() {
      console.log(111)
      if (!this.flag) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    del(ids) {
      delactivities({ ids }).then((res) => {
        if (res.Success) {
          Toast(res.Msg);
          this.$router.go(0);
        } else {
          Toast(res.Msg);
        }
      });
    },
    //线下活动
    activities() {
      activities({}).then((res) => {
        this.list = res.Data.Data;
        console.log(res)
      });
    },
    getList(item, checked, index) {
      // if(checked){
      // }
      // console.log(index)
      // console.log(item)
    },
    goReturn() {
      if (sessionStorage.IdentityType == "个人用户") {
        this.$router.push("/mines");
      } else {
        this.$router.push("/mine");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@function px($px) {
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#useoffline {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;

  .commodity_top {
    height: px(100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 px(20);
    position: relative;
    background: #fff;
    color: #222222;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    .commodity_return {
      width: px(21);
      img {
        width: 100%;
      }
    }
    .commodity_middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
    .commodity_right {
      font-size: 16px;
    }
  }
  .message_li_right {
    margin-left: px(10);
    display: flex;
    align-items: center;
    span {
      color: #2667bf;
    }
    .message_li_img {
      width: px(9);
      margin-left: px(11);
      img {
        width: 100%;
      }
    }
  }
  .message_con {
    padding-top: px(130);
    margin: 0 px(20);
    ul {
      li {
        width: 100%;
        background: #fff;
        padding: 0 px(20);
        margin-bottom: px(20);
        .message_li_top {
          height: px(74);
          border-bottom: 1px solid rgba(37, 103, 191, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .message_li_left {
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .message_li_yuan {
              width: px(20);
              height: px(20);
              border: 1px solid rgba(135, 135, 135, 1);
              opacity: 0.6;
              border-radius: 50%;
              margin-right: px(16);
            }
            .message_li_name {
              width: px(400);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 16px;
              color: #212121;
              margin: 0 px(20) 0 px(10);
            }
            .message_li_jin {
              span {
                display: block;
                padding: 0 px(13);
                text-align: center;
                background: #2567bf;
                border-radius: px(3);
                font-size: 12px;
                color: #fff;
              }
            }
          }
          .message_li_right {
            margin-left: px(35);
            display: flex;
            align-items: center;
            span {
              color: #2667bf;
            }
            .message_li_img {
              width: px(9);
              margin-left: px(11);
              img {
                width: 100%;
              }
            }
          }
        }
        .message_li_bottom {
          padding: px(30) 0 px(43);
          line-height: 1;
          color: #555555;
          .message_li_span {
            margin-bottom: px(-10);
            display: flex;
            // text-align: justify;
            // align-items: center;
            overflow-y: hidden;
            .message_li_tit {
              width: px(160);
              text-align: justify;
              > span {
                width: 100%;
                display: inline-block;
              }
            }
            span {
              display: inline-block;
              width: 100%;
            }
          }
          .message_li_span:nth-child(1) {
            margin-bottom: px(-4);
          }
        }
      }
    }
  }
  .stand_bottoms {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: px(100);
    background: #fff;
    .stand_bottom {
      width: px(710);
      height: px(87);
      position: absolute;
      // bottom: px(12);
      left: 50%;
      transform: translateX(-50%);
      background: #2668c0;
      border-radius: px(6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
    }
  }
  @media (max-width: 340px) {
    .commodity_li_n {
      width: px(150) !important;
    }
  }
}
</style>