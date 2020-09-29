<template>
  <div id = "accinform">
    <div class="comrel_top">
      <div class="comrel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comrel_middle">基本信息</div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入用户昵称" v-model="formData.username">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入联系人姓名" v-model="formData.name">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入职务"  v-model="formData.post">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入联系电话"  v-model="formData.phone">
      </div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司中文名称（必须与营业执照公司名称一致）"  v-model="formData.Title">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司英文名称（如无英文请填写公司拼音）"  v-model="formData.eTitle">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入统一社会信用代码"  v-model="formData.code">
      </div>
      <div class="comrel_con_inp1">
        <van-cell is-link @click="showPopup" v-model="showAddr">
        <span class="showAddr1" v-if="!addFlag">{{showAddr}}</span>
        <span class="showAddr2" v-if="addFlag">{{showAddr}}</span>
      </van-cell>
        <van-popup
        v-model="show"
        position="bottom"
      >
        <van-area
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          value="110000"
          title="选择地址"
          @change="changeAddr"
          @cancel="cancelChoose"
          @confirm="chooseThis"
        />
      </van-popup>
      <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入详细地址"  v-model="formData.address">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司网址"  v-model="formData.website">
      </div>
      <!-- <div class="comrel_con_inp">
        <input type="text" placeholder="请输入邮编"  v-model="formData.code">
      </div> -->
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司电话"  v-model="formData.Telephone">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司邮编"  v-model="formData.Postcode">
      </div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司简称（1-5个中文字符）"  v-model="formData.abbreviation">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请选择公司性质"  v-model="formData.nature">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入成立日期"  v-model="formData.establish">
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value"
          placeholder="请选择员工人数"
          @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns2"
            @cancel="showPicker2 = false"
            @confirm="onConfirm2"
          />
        </van-popup>
        <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
      <!-- <div class="comrel_con_inp">
        <input type="text" placeholder="请输入成立日期" v-model="formData.establish">
      </div> -->
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="formData.Industryrb"
          placeholder="请选择公司主营产品"
          @click="showPicker3 = true"
        />
        <van-popup v-model="showPicker3" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns3"
            @cancel="showPicker3 = false"
            @confirm="onConfirm3"
          />
        </van-popup>
        <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
      <div class="comrel_update">
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传营业执照</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传商标注册证</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead2" v-model="fileList2"   :max-count="1"/>
          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传产品授权书</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead3" v-model="fileList3" :max-count="1"/>

          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传专利证书</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead4" v-model="fileList4" :max-count="1"/>
          </div>
        </div>
      </div>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom" @click="goxzzw">下一步</div>
    </div>
  </div>
</template>

<script>
import areaList from '../../assets/js/area.js'
import {getObtainraccount} from "../../api/home"
import {ObtainCid} from "../../api/user"
import { Toast } from 'vant'
export default {
  data() {
    return{
      value: '',
      columns: ['男','女'],
      showPicker: false,
      value2: '',
      columns2: ['10-20','20-50','50-200','200-500','大于500'],
      showPicker2: false,
      value3: '',
      columns3: ['综合','内窥镜','手术室供应室消杀','放射','超声','检验'],
      showPicker3: false,
      show: false,  //是否显示弹出层
      detailAddress: '',  //绑定详细地址输入框
      areaList: areaList, //可选地址数据列表
      showAddr:'',
      addFlag:false,
      resAddr: '',       //传给后端的位置信息
      fileList: [
        {url:null}
      ],
      fileList2: [
       {url:null}
      ],
      fileList3: [
       {url:null}
      ],
      fileList4: [
       {url:null}
      ],
      formData:{
        username:"",
        name:"",
        post:"",
        phone:"",
        Title:"",
        eTitle:"",
        code:"",
        address:"",
        website:"",
        Fax:"",
        Telephone:"",
        Postcode:"",
        abbreviation:"",
        nature:"",
        establish:"",
        Industryrb:"",
        people:"",
        Patentcertificate:"",
        authorization:"",
        certificate:"",
        license:""
      },
     
    }
  },
  mounted(){
    // this.getObtainraccount()
  },
  methods:{
      goxzzw(){
        if(!this.formData.username){Toast('请输入用户昵称');return}
        if(!this.formData.name){Toast('请输入联系人姓名');return}
        if(!this.formData.Title){Toast('请输入公司中文名称（必须与营业执照公司名称一致）');return}
        if(!this.formData.eTitle){Toast('请输入公司英文名称（如无英文请填写公司拼音）');return}
        if(!this.formData.code){Toast('请输入统一社会信用代码');return}
        if(!this.formData.abbreviation){Toast('请输入详细地址');return}
        if(!this.formData.address){Toast('请输入详细地址');return}
        if(!this.formData.website){Toast('请输入公司网址');return}
        if(!this.formData.Postcode){Toast('请输入邮编');return}
        if(!this.formData.Telephone){Toast('请输入公司电话');return}
        if(!this.formData.Postcode){Toast('请输入公司邮编');return}
        sessionStorage.formdata = JSON.stringify(this.formData)
          this.$router.push("/ChooseBooth")
      },
    getObtainraccount(){
      let data = {
        cid:JSON.parse(sessionStorage.cidInfo).cid,
        Uid:sessionStorage.Uid
      }
    //   exhibitionObtainCid(data).then(res=>{
    //       console.log(res)
    //   })
      ObtainCid(data).then(res=>{
         sessionStorage.rb = res.Data.rb
        this.showAddr= res.Data.country +  res.Data.province + res.Data.city
      })
      getObtainraccount(data).then(res=>{
        console.log(res)
        if(res.Success){
        this.formData.username = res.Data.username
        this.formData.name = res.Data.name
        this.formData.post = res.Data.post
        this.formData.phone = res.Data.phone
        this.formData.Title = res.Data.Title
        this.formData.eTitle = res.Data.eTitle
        this.formData.code = res.Data.code
        this.formData.address = res.Data.address
        this.formData.website = res.Data.website
        this.formData.Fax = res.Data.Fax
        this.formData.Telephone = res.Data.Telephone
        this.formData.Postcode = res.Data.Postcode
        this.formData.abbreviation = res.Data.abbreviation
        this.formData.nature = res.Data.nature
        this.formData.establish = res.Data.establish
        this.formData.Industryrb = res.Data.Industryrb
        this.formData.people = res.Data.people
        this.formData.Patentcertificate = 'https://www.zjylz.com' + res.Data.Patentcertificate.split("&&")[0]
        this.formData.authorization = 'https://www.zjylz.com' + res.Data.authorization.split("&&")[0]
        this.formData.certificate = 'https://www.zjylz.com' + res.Data.certificate.split("&&")[0]
        this.formData.license = 'https://www.zjylz.com' + res.Data.license.split("&&")[0]
        this.fileList4[0].url = this.formData.license
        this.fileList3[0].url = this.formData.certificate
        this.fileList2[0].url = this.formData.authorization
        this.fileList[0].url =  this.formData.Patentcertificate
        console.log(this.formData)
        }else{
          Toast(res.Msg)
        }
      })
    },
    goReturn() {
      this.$router.push('/home')
    },
    onConfirm(value,index) {
      this.value = value;
      console.log(this.con[index])
      this.showPicker = false;
    },
    onConfirm2(value,index) {
      this.value2 = value;
      // console.log(index)
      this.showPicker2 = false;
    },
    onConfirm3(value,index) {
      this.value3 = value;
      // console.log(index)
      this.showPicker3 = false;
    },
    //控制popup组件的弹出和隐藏
         showPopup () {
        	this.show = true
      	},
       //改变地址选择，当切换省市区时进行数据留存
      changeAddr (picker) {
        //value=0改变省，1改变市，2改变区
        let val = picker.getValues()
        this.resAddr = val
      },
      cancelChoose() {
        this.show = false
      },
       //选好地址后点击确定
      chooseThis () {
        this.show = false
        this.addFlag = true
        //选中地址成功后回显
        if(this.resAddr[2].name != '请选择'){
          this.showAddr = this.resAddr[0].name + '-' + this.resAddr[1].name + '-' + this.resAddr[2].name
        }else{
          this.showAddr = this.resAddr[0].name + '-' + this.resAddr[1].name
        }
        console.log(this.resAddr, '即将传给后端的省市区信息')
      },
      afterRead(file) {
      // 此时可以自行将文件上传至服务器
        console.log(file)
      },
      afterRead2(file) {
      // 此时可以自行将文件上传至服务器
        console.log(file)
      },
      afterRead3(file) {
      // 此时可以自行将文件上传至服务器
        console.log(file)
      },
      afterRead4(file) {
      // 此时可以自行将文件上传至服务器
        console.log(file)
      },
    
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#accinform{
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
  .comrel_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 9;
    .comrel_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .comrel_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .comrel_con{
    margin: 0 0 px(30);
    .comrel_con_inp{
      height: px(89);
      padding: 0 px(32);
      background: #FFFFFF;
      border-bottom: 1px solid rgba(38,104,192,.1);
      // margin-bottom: px(30);
      input{
        width: 100%;
        height: 100%;
        border: none;
        font-size: 14px;
      }
    }
    .comrel_con_inp1{
      height: px(89);
      padding: 0 px(32);
      background: #FFFFFF;
      border-bottom: 1px solid rgba(38,104,192,.1);
      position: relative;
      display: flex;
      .van-cell{
        padding: 0;
        height: 100%;
        .van-cell__value{
          display: flex;
          align-items: center;
          // color: #888888;
          .showAddr1{
            color: #888888;
          }
        }
        .van-field__body{
          height: 100%;
        }
        .van-icon{
          display: none;
        }
      }
      .comrel_up{
        position: absolute;
        width: px(16);
        right: px(32);
        z-index: 9;
        top:50%;
        transform: translateY(-50%);
        img{
          width: 100%;
        }
      }
    }
    .comrel_update{
    background: #fff;
    padding:px(40) px(32) 0;
    margin-top: px(32);
    .comrel_updates{
      padding-bottom: px(40);
      .comrel_update_top{
      color:rgba(136,136,136,1);
    }
    .comrel_update_main{
      margin-top: px(30);
      .van-uploader{
        // width: px(244);
        // height: px(156);
        .van-uploader__wrapper{
          height: 100%;
          // width: 100%;
          display: flex;
          // flex-wrap: nowrap;
          .van-uploader__upload{
            width: px(244);
            height: px(156);
            margin:0;
            background-color:#E9F0F9 ;
          }
          .van-uploader__preview{
            width: px(244);
            height: px(156);
            // margin:0;
            .van-uploader__preview-image{
              width: 100%;
              height: 100%;
              img{
                object-fit:fill !important;
              }
            }
          }
        }
        
      }
    }
    }
    
  }
  }
  .comrel_con:nth-child(2){
    margin-top: px(100);
  }
  .comrel_con:nth-child(4){
    margin-bottom: px(160);
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