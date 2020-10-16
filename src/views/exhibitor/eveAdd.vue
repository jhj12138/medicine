<template>
  <div id="eveadd">
    <div class="eveadd_top">
      <div class="eveadd_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="" />
      </div>
      <div class="eveadd_middle">添加参会人员</div>
    </div>
    <div class="eveadd_con">
      <div class="eveadd_con_inp">
        <input type="text" placeholder="请输入姓名" v-model="name" />
      </div>
      <div class="eveadd_con_inp">
        <input
          type="text"
          placeholder="请输入身份证号码"
          v-model="certificates"
        />
      </div>
      <div class="eveadd_con_inp">
        <input type="text" placeholder="请输入手机号码" v-model="phone" />
      </div>
    </div>
    <div class="eveadd_bottom" @click="addpeoper">确定</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { ADDParticipants } from "../../api/home";
import { getParticipants } from "../../api/user/index";

export default {
  data() {
    return {
      name: "",
      certificates: "",
      phone: "",
      params: {},
    };
  },
  mounted() {
    this.getperpe();
  },
  methods: {
    goReturn() {
      this.$router.push("/evedail");
    },
    getperpe() {
      this.params.cid = JSON.parse(sessionStorage.cidInfo).cid;

      getParticipants(this.params).then((res) => {
        console.log(res.Data.Data);
        if (res.Success) {
          console.log(this.$route.query);
          // this.$router.push('/evedail')
          this.name = res.Data.Data[this.$route.query.ind].name;
          this.certificates = res.Data.Data[this.$route.query.ind].certificates;
          this.phone = res.Data.Data[this.$route.query.ind].phone;
        } else {
          Toast(res.Msg);
        }
      });
    },
    addpeoper() {
      if (this.$route.query.ind) {
        this.$router.push("/eveDail");
      } else {
        var data = {
          cid: JSON.parse(sessionStorage.cidInfo).cid,
          oid: sessionStorage.oid,
          name: this.name,
          certificates: this.certificates,
          phone: this.phone,
        };
        ADDParticipants(data).then((res) => {
          console.log(res)
          if (res.Success) {
            Toast(res.Msg);
            this.$router.push("/evedail");
          } else {
            Toast(res.Msg);
          }
        });
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
#eveadd {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .eveadd_top {
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: relative;
    background: #fff;
    .eveadd_return {
      width: px(21);
      img {
        width: 100%;
      }
    }
    .eveadd_middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
  .eveadd_con {
    margin-top: px(42);
    .eveadd_con_inp {
      height: px(89);
      padding: 0 px(54);
      background: #ffffff;
      margin-bottom: px(30);
      input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
      }
    }
  }
  .eveadd_bottom {
    width: px(710);
    height: px(87);
    position: fixed;
    bottom: px(12);
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
</style>