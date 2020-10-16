<template>
  <div id="invoice">
    <div class="invoice_top">
      <div class="invoice_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="" />
      </div>
      <div class="invoice_middle">发票信息</div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp1">
        <van-field
          readonly
          clickable
          :value="value"
          :placeholder="columnss"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="" />
        </div>
      </div>
      <div class="comrel_con_inp">
        <input
          type="text"
          placeholder="请输入开票公司名称（与营业执照一致）"
          v-model="corporate"
        />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入开票地址" v-model="address" />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入开票电话" v-model="iphone" />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="开票纳税人识别号" v-model="axpayer" />
      </div>
        <div class="comrel_con_inp">
        <input type="text" placeholder="请输入开户行" v-model="bank" />
        </div>
          <div class="comrel_con_inp">
           <input type="text" placeholder="请输入银行账号" v-model="accountnumber" />
        </div>
    </div>
    <div class="comrel_con2">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入收件公司" v-model="receiv" />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入收件地址" v-model="readdress" />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入收件手机" v-model="reiphone" />
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入收件人姓名" v-model="rename" />
      </div>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom" @click="goinv">确定</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import {
  addObtainInvoiceList,
  getObtain,
  exhibitionEditInvoice,
} from "../../api/home";
export default {
  data() {
    return {
      value: "",
      columnss: "请选择开票类型",
      columns: ["普通发票", "增值税专用发票"],
      showPicker: false,
      corporate: "",
      address: "",
      iphone: "",
      axpayer: "",
      receiv: "",
      readdress: "",
      reiphone: "",
      rename: "",
      ID: "",
      bank:"",
      accountnumber:"",
    };
  },
  mounted() {
    this.getObtain();
  },
  methods: {
    getObtain() {
      var data = {
        cid: JSON.parse(sessionStorage.cidInfo).cid,
      };
      getObtain(data).then((res) => {
        this.value = res.Data.type;
        this.corporate = res.Data.company;
        this.address = res.Data.address;
        this.iphone = res.Data.Telephone;
        this.axpayer = res.Data.number;
        this.receiv = res.Data.collectcompany;
        this.readdress = res.Data.collectaddress;
        // this.readdress = res.Data.collectaddress;
        this.reiphone = res.Data.collectTelephone;
        this.rename = res.Data.collectname;
        this.bank = res.Data.bank;
        this.ID = res.Data.ID;
        this.accountnumber=res.Data.accountnumber

        console.log(res);
      });
    },
    onConfirm(value, index) {
      this.value = value;
      // console.log(index)
      this.showPicker = false;
    },
    goReturn() {
      this.$router.push("/invdetail");
    },
    goinv() {
      if (this.ID) {
        if (!this.value) {
          Toast("请选择开票类型");
          return;
        }
        if (!this.corporate) {
          Toast("请输入开票公司名称");
          return;
        }
        if (!this.address) {
          Toast("请输入开票地址");
          return;
        }
        if (!this.iphone) {
          Toast("请输入开票电话");
          return;
        }
        if (!this.axpayer) {
          Toast("请输入开票纳税人识别号");
          return;
        }
        if (!this.receiv) {
          Toast("请输入收件公司");
          return;
        }
        if (!this.readdress) {
          Toast("请输入收件地址");
          return;
        }
        if (!this.reiphone) {
          Toast("请输入收件手机");
          return;
        }
        if (!this.rename) {
          Toast("请输入收件人姓名");
          return;
        }
        if (!/^1[3456789]\d{9}$/.test(this.iphone)) {
          Toast("开票电话有误");
          return;
        }
        if (!/^1[3456789]\d{9}$/.test(this.iphone)) {
          Toast("收件手机有误");
          return;
        }

        let data = {
          ID: this.ID,
          cid: JSON.parse(sessionStorage.cidInfo).cid,
          company: this.corporate,
          address: this.address,
          Telephone: this.iphone,
          number: this.axpayer,
          collectcompany: this.receiv,
          collectTelephone: this.reiphone,
          collectaddress: this.readdress,
          collectname: this.rename,
          type:this.value,
          bank:this.bank,
          accountnumber:this.accountnumber

        };
        exhibitionEditInvoice(data).then((res) => {
          if (res.Success) {
            Toast(res.Msg)
            this.$router.push("invdetail");
          }else{
            Toast(res.Msg)
          }
        });
      } else {
         let data = {
          cid: JSON.parse(sessionStorage.cidInfo).cid,
          company: this.corporate,
          address: this.address,
          Telephone: this.iphone,
          number: this.axpayer,
          collectcompany: this.receiv,
          collectTelephone: this.reiphone,
          collectaddress: this.readdress,
          collectname: this.rename,
          type:this.value,
          bank:this.bank,
          accountnumber:this.accountnumber

        };
        addObtainInvoiceList(data).then((res) => {
          console.log(res)
          if (res.Success) {
          Toast(res.Msg);
            this.$router.push("invdetail");

          } else {
            Toast(res.Msg);
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@function px($px) {
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#invoice {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  input::-webkit-input-placeholder {
    color: #888888;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #888888;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #888888;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #888888;
  }
  .invoice_top {
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    .invoice_return {
      width: px(21);
      img {
        width: 100%;
      }
    }
    .invoice_middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
  .comrel_con {
    margin-top: px(100);
    .comrel_con_inp {
      height: px(89);
      padding: 0 px(32);
      background: #ffffff;
      border-bottom: 1px solid rgba(38, 104, 192, 0.1);
      // margin-bottom: px(30);
      input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
      }
    }
    .comrel_con_inp1 {
      height: px(89);
      padding: 0 px(32);
      background: #ffffff;
      border-bottom: 1px solid rgba(38, 104, 192, 0.1);
      position: relative;
      .van-cell {
        padding: 0;
        height: 100%;
        .van-field__body {
          height: 100%;
        }
      }
      .comrel_up {
        position: absolute;
        width: px(16);
        right: px(32);
        z-index: 9;
        top: 50%;
        transform: translateY(-50%);
        img {
          width: 100%;
        }
      }
    }
  }
  .comrel_con2 {
    margin-top: px(28);
    .comrel_con_inp {
      height: px(89);
      padding: 0 px(32);
      background: #ffffff;
      border-bottom: 1px solid rgba(38, 104, 192, 0.1);
      // margin-bottom: px(30);
      input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
      }
    }
    .comrel_con_inp1 {
      height: px(89);
      padding: 0 px(32);
      background: #ffffff;
      border-bottom: 1px solid rgba(38, 104, 192, 0.1);
      position: relative;
      .van-cell {
        padding: 0;
        height: 100%;
        .van-field__body {
          height: 100%;
        }
      }
      .comrel_up {
        position: absolute;
        width: px(16);
        right: px(32);
        z-index: 9;
        top: 50%;
        transform: translateY(-50%);
        img {
          width: 100%;
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
}
</style>