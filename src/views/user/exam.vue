<template>
  <div id = "exam">
    <div class="comrel_top">
      <div class="comrel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comrel_middle">疫情防控调查</div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value2"
          placeholder="国家和地区"
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
      <div class="comrel_con_inp1" v-if="v_show">
        <van-cell is-link @click="showPopup" v-model="showAddr">
        <span class="showAddr1" v-if="!addFlag">省份/城市</span>
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
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value3"
          placeholder="是否出现发热、干咳、乏力、呼吸困难等症状？"
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
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value4"
          placeholder="除到达地之外是否走访或停留过其他地址？"
          @click="showPicker4 = true"
        />
        <van-popup v-model="showPicker4" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns4"
            @cancel="showPicker4 = false"
            @confirm="onConfirm4"
          />
        </van-popup>
        <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value5"
          placeholder="目前同住家庭成员是否有发热现象？"
          @click="showPicker5 = true"
        />
        <van-popup v-model="showPicker5" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns5"
            @cancel="showPicker5 = false"
            @confirm="onConfirm5"
          />
        </van-popup>
        <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div>
      </div>
    </div>
    <div class="stand_bottoms" @click="goSubmit">
      <div class="stand_bottom">我承诺</div>
    </div>
  </div>
</template>

<script>
import {OnlineCode} from '../../api/user/index'
import { Toast } from 'vant'
import areaList from '../../assets/js/area.js'
export default {
  data() {
    return{
      // value: '',
      // columns: ['男','女'],
      // showPicker: false,
      v_show: true,
      value2: '',
      columns2: [],
      showPicker2: false,
      value3: '',
      columns3: ['是','否'],
      showPicker3: false,
      value4: '',
      columns4: ['是','否'],
      showPicker4: false,
      value5: '',
      columns5: ['是','否'],
      showPicker5: false,
      show: false,  //是否显示弹出层
      detailAddress: '',  //绑定详细地址输入框
      areaList: areaList, //可选地址数据列表
      showAddr:'',
      addFlag:false,
      resAddr: '',       //传给后端的位置信息
    }
  },
  methods:{
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
      if(this.value2 !== '中国'){
        this.v_show = false 
      } else {
        this.v_show = true
      }
      // console.log(index)
      this.showPicker2 = false;
    },
    onConfirm3(value,index) {
      this.value3 = value;
      // console.log(index)
      this.showPicker3 = false;
    },
    onConfirm4(value,index) {
      this.value4 = value;
      // console.log(index)
      this.showPicker4 = false;
    },
    onConfirm5(value,index) {
      this.value5 = value;
      // console.log(index)
      this.showPicker5 = false;
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
      if(this.resAddr[1])
      console.log(this.resAddr[1])
      if(this.resAddr[2].name != '请选择'){
        this.showAddr = this.resAddr[0].name + '-' + this.resAddr[1].name + '-' + this.resAddr[2].name
      }else if (!this.resAddr[1]){
        this.showAddr = this.resAddr[0].name
      }
      console.log(this.resAddr, '即将传给后端的省市区信息')
    },
    //获取国家和地区
    OnlineCode () {
      OnlineCode().then((res) => {
        console.log(res)
        if(res.Success) {
          res.Data.forEach(ele=> {
            this.columns2.push(ele.Title)
          })
        }
      })
    },
    // 跳转到报名页面
    goSubmit() {
      if(!this.value2 || !this.value3 || !this.value4 || !this.value5){Toast('请填写所有信息');return}
      if (this.v_show) {
        if(!this.showAddr){Toast('请输入省份/城市');return}
      }
      this.$router.push('/enterfor')
    }
  }, 
  mounted() {
    this.OnlineCode()
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#exam{
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
          width: 100%;
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