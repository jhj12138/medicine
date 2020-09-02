<template>
  <div id = "stand">
    <div class="stand_top">
      <div class="stand_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="stand_middle">展位信息</div>
    </div>
    <div class="stand_con">
      <div class="stand_con_inp">
        <input type="text" placeholder="请输入公司简称" v-model="company">
      </div>
      <div class="stand_con_inp">
        <input type="text" placeholder="请输入联系人" v-model="contacts">
      </div>
      <div class="stand_con_inp">
        <input type="text" placeholder="请输入联系电话" v-model="phones">
      </div>
      <div class="stand_con_inp">
        <input type="text" placeholder="请输入邮箱地址" v-model="email">
      </div>
    </div>
    <div class="stand_update">
      <div class="stand_updates">
        <div class="stand_update_top">请上传公司logo</div>
        <div class="stand_update_main">
          <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
        </div>
      </div>
      <div class="stand_updates">
        <div class="stand_update_top">请上传公司图片</div>
        <div class="stand_update_main">
          <van-uploader :after-read="afterRead2" v-model="fileList2" :max-count="1"/>
        </div>
      </div>
    </div>
    <div class="stand_textarea">
      <div class="stand_textarea_left">
        <img src="../../assets/image/stand_img.png" alt="">
      </div>
      <div class="stand_textarea_right">
        <textarea placeholder="请填写公司的简介" v-model="textareas"></textarea>
      </div>
    </div>
    <div class="stand_bottom" @click="submits">确定</div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return{
      fileList: [
       
      ],
      fileList2: [
       
      ],
      company:'',
      contacts:'',
      phones:'',
      email:'',
      textareas:''
    }
  },
  methods:{
    goReturn() {
      this.$router.push('/mine')
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    afterRead2(file) {
      console.log(file)
    },
    submits() {
      if(!this.company){Toast('请输入公司简称');return}
      if(!this.contacts){Toast('请输入联系人');return}
      if(!this.phones){Toast('请输入联系电话');return}
      if(!this.email){Toast('请输入邮箱地址');return}
      if(this.fileList.length == 0){Toast('请上传公司logo');return}
      if(this.fileList.length == 0){Toast('请上传公司图片');return}
      if(!this.textareas){Toast('请输入邮箱地址');return}
      if (!(/^1[3456789]\d{9}$/.test(this.phones))){Toast('联系人电话有误');return} 
      if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.email))){Toast('邮箱有误');return} 
    }
  }
}
</script>

<style lang="scss" >
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#stand{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .stand_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    .stand_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .stand_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .stand_con{
    margin-top: px(100);
    .stand_con_inp{
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
  }
  .stand_update{
    background: #fff;
    padding:px(40) px(32) 0;
    margin-top: px(32);
    .stand_updates{
      padding-bottom: px(40);
      .stand_update_top{
      color:rgba(136,136,136,1);
    }
    .stand_update_main{
      margin-top: px(30);
      .van-uploader{
        width: px(244);
        height: px(156);
        .van-uploader__wrapper{
          height: 100%;
          width: 100%;
          .van-uploader__upload{
            width: 100%;
            height: 100%;
            margin:0;
            background-color:#E9F0F9 ;
          }
          .van-uploader__preview{
            width: 100%;
            height: 100%;
            margin:0;
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