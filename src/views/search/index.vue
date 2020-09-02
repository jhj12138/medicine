<template>
  <div id = "search">
      <div class="on-top">
          <div class="on-ta">
              <img src="../../assets/image/mine_return.png" class="on-a">
              <div><span>展位搜索列表</span></div>
          </div>
      </div>
      <div class="on-mid">
          <div class="sl">
              <van-field
                readonly
                clickable
                :value="value3"
                placeholder="公司主营产品"
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
          </div>
          <div class="sr">
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
            value="110000"
            title="选择地址"
            @change="changeAddr"
            @cancel="cancelChoose"
            @confirm="chooseThis"
            />
            </van-popup>
          </div>
      </div>
      <div class="on-bot">
          <div class="loo" v-if="all">
              <div class="lo" v-for="(item, ind) in all" :key="ind">
                  <img src="" alt="">
                    <div>
                        <h5>{{item.Title}}</h5>
                        <p>{{item.Patentcertificate}}</p>
                        <b>{{item.address}}</b>
                        <span>{{item.eid}}</span>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {getqc,getar} from '../../api/home'
import areaList from '../../assets/js/area.js'
export default {
  data() {
    return{
        list: null,
        value3: '',
        columns3: ['是','否'],
        gg3: [],
        showPicker3: false,
        value2: '',
        columns2: [],
        showPicker2: false,
        showAddr: '',
        areaList: areaList,
        addFlag:false,
        show: false,
        all: null,
        ta: null
    }
  },
  methods:{
    onConfirm3(value,index) {
      this.value3 = value;
      // console.log(index)
      this.showPicker3 = false;
      this.qc()
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
    changeAddr (picker) {
      //value=0改变省，1改变市，2改变区
      let val = picker.getValues()
      this.resAddr = val
    },
    cancelChoose() {
      this.show = false
    },
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
    //   console.log(this.resAddr, '即将传给后端的省市区信息')
    },
    showPopup () {
    this.show = true
    },
    cha () {
        getar().then(res => {
            if (res.Success) {
                this.columns3 = res.Data.map(res => {
                    return res.name
                })
                this.gg3 = res.Data.map(res => {
                    return res.lid
                })
            } else {
                this.$message.error(res.Msg)
            }
            // console.log(this.gg3)
        })
    },
    qc () {
        const s = {
            Industryrb: this.gg3[this.columns3.indexOf(this.value3)],
            province: this.value2
        }
        console.log(s)
        getqc(s).then(res => {
            if (res.Success) {
                this.all = res.Data.Data
            } else {
                this.$message.error(res.Msg)
            }
            console.log(this.all)
        })
    },
    lop () {
        // this.qc()
    }
  },
  mounted () {
      this.cha()
      this.qc()
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#search{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
    .on-top{
        height: px(128);
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
                span{
                    display: block;
                    font-size: px(30);
                    font-weight: bold;
                    color: #222222;
                    line-height: px(75);
                    text-align: center;
                }
            }
        }
    }
    .on-mid{
        position: fixed;
        top: px(128);
        width: 100%;
        overflow: hidden;
        .sl{
            width: 40%;
            float: left;
        }
        .sr{
            width: 60%;
            float: left;
        }
    }
    .on-bot{
        overflow: hidden;
        margin-top: px(220);
        .loo{
            .lo{
                overflow: hidden;
                img{
                float: left;
                width: px(311);
                height: px(175);
                display: block;
            }
            div{
                float: left;
                width: px(320);
                h5{  
                font-size: px(26);
                font-family: PingFangSC;
                font-weight: bold;
                color: #222222;
                line-height: px(75);
                }
                p,b,span{
                    display: block;
                    font-size: px(20);
                    font-weight: 400;
                    color: #565656;
                    line-height: px(75);
                }
            }
            }
        }
    }
}
.van-field__control{
font-size: px(26);
font-weight: 400;
color: #222222;
line-height: px(75);
}
</style>