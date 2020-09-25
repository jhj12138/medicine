<template>
  <div id = "accinform">
    <div class="comrel_top">
      <div class="comrel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comrel_middle">账户信息</div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入用户昵称" v-model="username">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入联系人姓名" v-model="lxname">
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value"
          placeholder="请选择性别"
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
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入职务"  v-model="userpost">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入联系电话"  v-model="suerphone">
      </div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司中文名称（必须与营业执照公司名称一致）"  v-model="Title">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司英文名称（如无英文请填写公司拼音）"  v-model="eTitle">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入统一社会信用代码"  v-model="code">
      </div>
      <div class="comrel_con_inp1">
        <van-cell is-link @click="showPopup" v-model="showAddr">
        <span class="showAddr1" v-if="!addFlag">请选择公司地址</span>
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
        <input type="text" placeholder="请输入详细地址"  v-model="address">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司网址"  v-model="website">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入邮编"  v-model="Postcode">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司电话"  v-model="Telephone">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司邮编"  v-model="Postcode">
      </div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入公司简称（1-5个中文字符）"  v-model="abbreviation">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请选择公司性质"  v-model="nature">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入成立日期"  v-model="establish">
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="people"
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
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入成立日期" v-model="establish">
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="Industryrb"
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
            <van-uploader :after-read="afterRead" v-model="fileList" :max-count="3"/>
          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传商标注册证</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead2" v-model="fileList2"   :max-count="3"/>
          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传商标注册证</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead3" v-model="fileList3" :max-count="3"/>

          </div>
        </div>
        <div class="comrel_updates">
          <div class="comrel_update_top">请上传商标注册证</div>
          <div class="comrel_update_main">
            <van-uploader :after-read="afterRead4" v-model="fileList4" :max-count="3"/>
          </div>
        </div>
      </div>
    </div>
    <div class="stand_bottoms">
      <div class="stand_bottom">发票信息</div>
    </div>
  </div>
</template>

<script>
import areaList from '../../assets/js/area.js'
import {getObtainraccount} from "../../api/home"
import { Toast } from 'vant'
export default {
  data() {
    return{
      value: '',
      columns: ['男','女'],
      showPicker: false,
      value2: '',
      columns2: ['1','2'],
      showPicker2: false,
      value3: '',
      columns3: ['产品1','产品2'],
      showPicker3: false,
      show: false,  //是否显示弹出层
      detailAddress: '',  //绑定详细地址输入框
      areaList: areaList, //可选地址数据列表
      showAddr:'',
      addFlag:false,
      resAddr: '',       //传给后端的位置信息
      fileList: [
        {url:"https://www.zjylz.com/Upload/image/202009/20200905165259_5803.jpg"}
      ],
      fileList2: [
       {url:"https://www.zjylz.com/Upload/image/202009/20200905165259_5803.jpg"}
      ],
      fileList3: [
       {url:"https://www.zjylz.com/Upload/image/202009/20200905165259_5803.jpg"}
      ],
      fileList4: [
       {url:""}
      ],
      username:"",
      lxname:"",
      userpost:"",
      suerphone:"",
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
      imgurl:"",
      imgurl2:"",
      imgurl3:"",
      imgurl4:""
    }
  },
  mounted(){
    this.getObtainraccount()
  },
  methods:{
    getObtainraccount(){
      let data = {
        cid:JSON.parse(sessionStorage.cidInfo).cid
      }
      getObtainraccount(data).then(res=>{
        console.log(res)
        if(res.Success){
        this.username = res.Data.username
        this.lxname = res.Data.name
        this.userpost = res.Data.post
        this.suerphone = res.Data.phone
        this.Title = res.Data.Title
        this.eTitle = res.Data.eTitle
        this.code = res.Data.code
        this.address = res.Data.address
        this.website = res.Data.website
        this.Fax = res.Data.Fax
        this.Telephone = res.Data.Telephone
        this.Postcode = res.Data.Postcode
        this.abbreviation = res.Data.abbreviation
        this.nature = res.Data.nature
        this.establish = res.Data.establish
        this.Industryrb = res.Data.Industryrb
        this.people = res.Data.people
        this.imgurl = 'https://www.zjylz.com' + res.Data.Patentcertificate.split("&&")[0]
        this.imgurl2 = 'https://www.zjylz.com' + res.Data.authorization.split("&&")[0]
        this.imgurl3 = 'https://www.zjylz.com' + res.Data.certificate.split("&&")[0]
        this.imgurl4 = 'https://www.zjylz.com' + res.Data.license.split("&&")[0]
        this.fileList4[0].url = this.imgurl4
        this.fileList3[0].url = this.imgurl3
        this.fileList2[0].url = this.imgurl2
        this.fileList[0].url = this.imgurl
        console.log(this.imgurl)
        }else{
          Toast(res.Msg)
        }
      })
    },
    goReturn() {
      this.$router.push('/mine')
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