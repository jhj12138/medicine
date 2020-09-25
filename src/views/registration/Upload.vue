<template>
  <div id = "invoice">
    <div class="invoice_top">
      <div class="invoice_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="invoice_middle">上传付款凭证</div>
    </div>
    <div class="invoice_cont">
        <p class="invoice_cont_titel">请上付款凭证（报名后三日内交付参展费）</p>
        <van-uploader :after-read="afterRead" v-model="fileList" multiple class="invoice_img" :max-count="1" />
        <div  class="invoice_cont_cont">
            <!-- <img src="../../assets/image/upload1.png" alt=""> -->
            <div>展位费支付方式：</div>
            <div>(一)展位费需以公对公银行转账汇入。</div>
            <div>(二)请将展位费汇入一下指定账户：</div>
            <div v-html="contentlist">
            </div>
        </div>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom" @click="goinv">确定</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {addObtainInvoiceList} from "../../api/home"
import { exhibitionObtainrbInvoice } from '../../api/user';

export default {
  data() {
    return{
      value: '',
      columns: ['推荐','不推荐'],
      fileList:[],
      showPicker: false,
      corporate:'',
      address:'',
      iphone:'',
      axpayer:'',
      receiv:'',
      readdress:'',
      reiphone:'',
      rename:'',
      contentlist:""
    }
  },
   mounted(){
      this.updataym()
  },
  methods:{
        updataym(){
          var data = {
              rb : sessionStorage.rb
          }
       exhibitionObtainrbInvoice(data).then(res=>{
           this.contentlist = res.Data.Content
       })
      },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
     },
    onConfirm(value,index) {
      this.value = value;
      // console.log(index)
      this.showPicker = false;
    },
    goReturn() {
      this.$router.push('/ChooseBooth2')
    },
    goinv() {
        this.$router.push('/ChooseBooth2')

      if(!this.value){Toast('请选择开票类型');return}
      if(!this.corporate){Toast('请输入开票公司名称');return}
      if(!this.address){Toast('请输入开票地址');return}
      if(!this.iphone){Toast('请输入开票电话');return}
      if(!this.axpayer){Toast('请输入开票纳税人识别号');return}
      if(!this.receiv){Toast('请输入收件公司');return}
      if(!this.readdress){Toast('请输入收件地址');return}
      if(!this.reiphone){Toast('请输入收件手机');return}
      if(!this.rename){Toast('请输入收件人姓名');return}
      if (!(/^1[3456789]\d{9}$/.test(this.iphone))){Toast('开票电话有误');return} 
      if (!(/^1[3456789]\d{9}$/.test(this.iphone))){Toast('收件手机有误');return} 
     
      let data={
        cid:JSON.parse(sessionStorage.cidInfo).cid,
        company:this.corporate,
        address:this.address,
        Telephone:this.iphone,
        number:this.axpayer,
        collectcompany:this.receiv,
        collectTelephone:this.reiphone,
        collectaddress:this.readdress,
        collectname:this.rename
      }
     addObtainInvoiceList(data).then(res=>{
       if(res.Success){
        Toast(res.Msg)
        this.$router.query({invoices:true})
        this.$router.push('/ChooseBooth2')
       }else{
         Toast(res.Msg)
       }
       
      })
  
  }
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#invoice{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  input::-webkit-input-placeholder{
    color:#888888;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#888888;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#888888;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#888888;
  }
  .invoice_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .invoice_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .invoice_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
      font-weight: 600;
    }
  }
  .invoice_cont_cont{
      padding: px(40);
      font-size:px(28) ;
      color: #888888;
  }
 .invoice_cont{
     margin-top:px(100) ;
     background: #FFFFFF;
    .invoice_img{
     padding-left:px(30) ;
        img{
        width: px(160);
        height: px(160); 
        }
    }
     p{
     padding:px(30) ;
     margin-bottom:px(20) ;
     }
     img{
        //  margin-top:px(20) ;
         width: px(800);
         height: px(500);
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
}
</style>