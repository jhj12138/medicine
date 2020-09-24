<template>
  <div id = "comrel">
    <div class="comrel_top">
      <div class="comrel_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="comrel_middle">商品发布</div>
    </div>
    <div class="comrel_con">
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入商品名称" v-model="names">
      </div>
      <div class="comrel_con_inp">
        <input type="text" placeholder="请输入商品价格" v-model="price">
      </div>
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value"
          placeholder="是否推荐"
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
      <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value2"
          placeholder="商品状态"
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
      <!-- <div class="comrel_con_inp1"> -->
       <!-- <van-field
          readonly
          clickable
          :value="value3"
          placeholder="所属分类"
          @click="showPicker3 = true"
        /> -->
        <!-- <van-popup v-model="showPicker3" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns3"
            @cancel="showPicker3 = false"
            @confirm="onConfirm3"
          />
        </van-popup> -->
        <!-- <div class="comrel_up">
          <img src="../../assets/image/up_picker.png" alt="">
        </div> -->
      <!-- </div> -->
    </div>
    <div class="comrel_update">
      <div class="comrel_updates">
        <div class="comrel_update_top">请上传商品图片</div>
        <div class="comrel_update_main">
          <van-uploader :after-read="afterRead" v-model="fileList" :max-count="3"/>
        </div>
      </div>
    </div>
    <div class="stand_textarea">
      <div class="stand_textarea_left">
        <img src="../../assets/image/stand_img.png" alt="">
      </div>
      <div class="stand_textarea_right">
        <textarea placeholder="请填写商品介绍" v-model="textareas"></textarea>
      </div>
    </div>
    <div class="stand_bottom" @click="submits">确定</div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { AddgoodsContent } from '../../api/home';
export default {
  data() {
    return {
      value: '',
      columns: ['推荐','不推荐'],
      showPicker: false,
      value2: '',
      columns2: ['测试','其他类','综合类','手术器械类','内视镜类'],
      showPicker2: false,
      value3: '',
      showPicker3: false,
      fileList: [
       
      ],
      names:'',
      price:'',
      textareas:'',
      sum:"",
    };
  },
  mounted(){
    // this.AddgoodsContent()
  },
  methods: {
    onConfirm(value,index) {
      this.value = value;
      // console.log(index)
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
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    goReturn() {
      this.$router.push('/commodity')
    },
    submits() {
      if(!this.names){Toast('请输入商品名称');return}
      if(!this.price){Toast('请输入商品价格');return}
      if(!this.value){Toast('请输入是否推荐');return}
      if(!this.value2){Toast('请输入商品状态');return}
      if(this.fileList.length == 0){Toast('请上传商品图片');return}
      // if(!this.value3){Toast('请输入所属分类');return}
      if(!this.textareas){Toast('请填写商品介绍');return}
       if(this.value=="推荐"){
        this.sum=1
      }else{
        this.sum=0
      }
      //添加商品信息
      var goodsid=JSON.parse(sessionStorage.cidInfo)
      let data = {
        cid:goodsid.cid,
        Price:this.price,
        name:this.names,
        isrecommend:this.sum,
        classid:this.value2,
        // imgurl:"",
        Summary:this.textareas,
        
      }
      AddgoodsContent(data).then(res=>{
        console.log(res)
      })
    }
  },
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#comrel{
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
    margin-top: px(100);
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
      .van-cell{
        padding: 0;
        height: 100%;
        .van-field__body{
          height: 100%;
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
  .stand_textarea{
    display: flex;
    width: 100%;
    height: px(274);
    padding: px(42) px(32);
    background-color: #fff;
    margin: px(30) 0 px(205);
    .stand_textarea_left{
      width: px(28);
      img{
        width: 100%;
      }
    }
    .stand_textarea_right{
      flex: 1;
      margin-left: px(23);
      >textarea{
        width: 100%;
        height: 100%;
        resize: none;
        border:none
      }
    }
  }
  .stand_bottom{
    width: px(710);
    height: px(87);
    position: fixed;
    bottom: px(12);
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
</style>