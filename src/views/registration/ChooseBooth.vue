<template>
  <div class="all">
    <div class="header">
      <div class="surrTra_top">
        <div class="surrTra_return" @click="goReturn">
          <img src="../../assets/image/mine_return.png" alt />
        </div>
        <div class="surrTra_middle">展会报名</div>
      </div>
        <div class="Articlesteps">
            <ul class="Articlestepssum">
                <li class="Articlestepssum-li">1</li>
                <li class="Articlestepssum-li">2</li>
                <li class="Articlestepssum-li">3</li>
                <li class="Articlestepssum-li">4</li>
            </ul>
            <ul class="Articlestepstext">
                <li class="Articlestepstext-li">注册信息</li>
                <li class="Articlestepstext-li">选择展位</li>
                <li class="Articlestepstext-li">等待审核</li>
                <li class="Articlestepstext-li">上传凭证</li>
            </ul>
        </div>
        <div class="hx"></div>
        <div class="xx"></div>
        <div class="xx xx1"></div>
    </div>
      <van-collapse v-model="activeNames" class="xzzw">
          <van-collapse-item :title="title" name="1">
            <div class="header_li">
              <p v-for="(item,index) in list"  :key="index" @click="changetitle(item.price - item.Discount,index,item.ID)" >{{item.Title}}</p>
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="area">
           <input type="text" placeholder="请输入要求参展数与面积(3*3)" v-model="msum">
        </div>
        <div class="Upload">
        <a class="link" href="https://www.zjylz.com/Upload/20200829.pdf" target="_blank" download>请下载2020年第33届春季医疗展会--展位申请表</a>
        <van-uploader :after-read="afterRead"   v-model="fileList" :max-count="1"/>
        <p>请上传申请表</p>
        </div>
        <div class="explain">
          <div class="explain1">说明:</div>
          <div>
            <p v-html="explain1"></p>
            <!-- <p>2、在 2018 年 12 月 20 日前全额缴纳展位费可优惠 1000 元/每展位。</p> -->
          </div>
        </div>
          <div class="stand_bottoms">
             <div class="stand_bottom" @click="goxzzw">下一步</div>
         </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {exhibitionBooth,exhibitionOrderAdd} from '../../api/user'
import {uploadimgs} from '../../api/home'
export default {
  data() {
    return {
      active: 1,
      list:[],
      activeNames: [],
      fileList:[],
      title:"请选择展位",
      msum:"",
      explain1:'',
      formdata:{},
      baseurl:"",
      Orderamount:'',
      epid:""
    };
  },
  mounted(){
    this.exhibitionBooth()
  },
  methods:{
    afterRead(file){
        console.log(file)
         const fd = new FormData()
            fd.append('File', file.file)
            fd.append('FileType', 'image')
            uploadimgs(fd).then(res => {
                this.baseurl = 'https://www.zjylz.com/' + res.Data
            })
            console.log(this.baseurl)
    },
    exhibitionBooth(){
      let data = {
        cid:JSON.parse(sessionStorage.cidInfo).cid,
        Uid:sessionStorage.Uid,
        bsid:sessionStorage.bsid,
        action:"Booth"
      }
      exhibitionBooth(data).then(res=>{
        console.log(res)
        this.list = res.Data
        this.explain1 = res.Data[0].Summary
      })
    },
    changetitle(price,index,ID){
     this.title = this.list[index].Title 
     this.activeNames = []
     this.Orderamount = price
     this.epid = ID
    },
     goxzzw(){
      //  console.log(this.msum)
      if(this.title=="请选择展位"){Toast('请选择展位');return}
       if(!this.msum){
         Toast('请输入参展数与面积')
         return
         }
         var GenerateOrder = 'GenerateOrder'
         this.formdata = JSON.parse(sessionStorage.formdata)
         this.formdata.action = GenerateOrder
         this.formdata.bsid = sessionStorage.bsid
         this.formdata.Upload = this.baseurl
         this.formdata.epid = this.epid
         this.formdata.Orderamount = this.Orderamount
         this.formdata.cid = JSON.parse(sessionStorage.cidInfo).cid
         console.log(this.formdata)
         exhibitionOrderAdd(this.formdata).then(res=>{
              // this.$router.push('/ChooseBoothpass')
            console.log(res)
           if(res.Success){
              Toast(res.Msg)
              sessionStorage.oid = res.Data
              this.$router.push('/ChooseBoothpass')
           }else{
             if(res.Msg == "已报名"){
               Toast(res.Msg)
             }
           }
         })
      //  this.$router.push('/ChooseBoothpass')
     },
     goReturn(){
       this.$router.push('/gsxx')
     }
  }
};
</script>

<style lang="scss" scoped>
@function px($px) {
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.Articlesteps{
    width: 80%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left:-40% ;
    ul{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom:px(30) ;  
        li{
            margin: 0 px(10);
            font-size:px(28) ;
            // color: #3963EC; 
            // color: #fff;    
            font-family: PingFangSC;
            font-weight: bold;
        }
    }  
}
.explain{
  display: flex;
  padding:px(10) px(30) ;
  
font-family: PingFangSC;
font-weight: 400;
color: #888888;
line-height: px(36);
  .explain1{
    width: px(100);
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
.Articlestepssum-li{
    display: block;
    width: px(40);
    height: px(40);
    background: #fff;
    border-radius:50% ;
    color: #214EB1;
    text-align: center;
    line-height: px(40);
    }
.Articlestepssum-li:nth-child(3){
    opacity: 0.4;
    }
.Articlestepssum-li:nth-child(4){
    opacity: 0.4;
 }
 .Articlestepstext{
      color: #fff;  
 }
 .Articlestepstext-li:nth-child(3){
    opacity: 0.4;

 }
 .Articlestepstext-li:nth-child(4){
    opacity: 0.4;

 }
 .xzzw{
   margin-top:px(500) ;
 }
 .area{
   border-bottom:px(2) solid  #2669c007;
   input{
      width: 100%;
      height: px(100);
      outline: none;
      border: none;
      padding-left:px(30) ;
   }
 }
 .hx{
        position: absolute;
        top: 43%;
        left: 22%;
        width: px(115);
        height: px(2);
        border: px(2) solid #FFFFFF;
        background: #ffffff;
    }
    .xx{
        position: absolute;
        top: 43%;
        left: 42.5%;
        width: px(112);
        height: px(2);
        border: px(2) solid #FFFFFF;
        background: #ffffff;
        opacity: 0.4;
    }
    .xx1{
       left: 62.5%; 
    }
    .Upload{
      margin-left:px(30) ;
      p{
        font-size:px(24) ;
        color: #888888;
      }
    }
.header {
     //      width: 750px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: px(497);
    background: linear-gradient(126deg, #154498 0%, #3963EC 100%);
  .surrTra_top {
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    // background: #fff;
    // border-bottom: 1px solid rgba(44, 118, 217, 0.1);
    .surrTra_return {
      width: px(21);
      img {
        width: 100%;
      }
    }
    .surrTra_middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #FFFFFF;
    }
  }
}

</style>