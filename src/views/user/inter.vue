<template>
  <div id = "inter">
    <div class="login_top">
      <div class="login_return">
        <img src="../../assets/image/mine_return.png" alt="" @click="goreturn">
      </div>
      <div class="login_middle">我感兴趣的</div>
    </div>
    <div class="ix-top">
        <div class="ix-a">我感兴趣的</div>
        <div class="ix-b">
            <div v-for="(item,ind) in list" :key="ind" @click="xz($event,ind,item)" class="">{{item}}</div>
        </div>
        <div class="ix-c">
             <p @click="quan" v-if ="now">全部选择</p>
             <p @click="quans" v-if ="!now">取消选择</p>
              <div @click="submit">下一步</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {intrestget,intrestedit} from '../../api/user'

export default {
  data() {
    return{
        list:[],
        now: true,
        Id: null,
        arr:[]
    }
  },
  mounted(){
    this.intrestget()
  },
  methods:{
    intrestget(){
      intrestget({}).then(res=>{
        this.list = res.Data.split('|')
        console.log(res.Data)
      })
    },
    quan(){
        var ib=document.getElementsByClassName("ix-b")[0].children
        this.list.forEach(ele => {
          this.arr.push(ele)
        })
        // this.arr = this.list
        for(var i=0;i<ib.length;i++){
        ib[i].classList.add('sol')
        }
        console.log(this.arr)
        this.now = !this.now
      },
        quans() {
        var ib=document.getElementsByClassName("ix-b")[0].children
        this.arr = []
        this.now = !this.now
        for(var i=0;i<ib.length;i++){
          ib[i].classList.remove('sol')
        }
        console.log(this.arr)
      },
      submit(){
         if (this.arr.length != 0) {
          const data = {
            Intrests : this.arr.join('|'),
          }
          console.log(data)
          intrestedit(data).then((res) => {
            console.log(res)
            Toast(res.Msg)
           this.$router.push({ path: '/inraim'})
            console.log(res)
          })
        }
      },
      goreturn(){
        this.$router.push({path:'/enterFor'})
      },
      xz(e,ind,item){
          if(e.target.classList[0]==undefined){
              e.target.classList.add('sol')
               this.arr.push(item)
          }else{
              e.target.classList.remove('sol')
              this.arr.splice(key,1)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
.sol{
    border: 1px solid #2B75D9!important;
}
#inter{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  background-color: #f5f7fa;
  .login_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    z-index: 999;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: white;
    .login_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .login_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: px(30);
      font-weight: bold;
    }
  }
  .ix-top{
      height: 85%;
      position: relative;
      .ix-a{
        margin: px(198) 0 px(100) 0;
        font-size:px(50);
        font-weight:bold;
        color:rgba(51,51,51,1);
        text-align: center;
      }
      .ix-b{
          display: flex;
          justify-content: left;
          flex-wrap: wrap;
          div{
            height:px(70);
            border:1px solid rgb(153, 153, 153);
            border-radius:px(10);
            line-height: px(70);
            text-align: center;
            padding: 0 1%;
            margin: 1% 2%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            align-items: center;
            img{
                display: block;
                width: px(23);
                height: px(18);
                line-height: px(70);
            }
            span{
                word-wrap: nowrap;
                display: block;
            }
          }
      }
      .ix-c{
          position: absolute;
          bottom: 2%;
          width: 100%;
        p{
            font-size:px(30);
            font-weight:500;
            color:rgba(153,153,153,1);
            line-height:px(50);
            text-align: center;
            margin-bottom: px(25);
        }
        div{
            width: 92%;
            margin: 0 auto;
            height:px(90);
            background:rgba(43,117,217,1);
            border-radius:px(45);
            line-height: px(90);
            text-align: center;
            font-size:px(32);
            font-weight:500;
            color:rgba(255,255,255,1);
        }
      }
  }
}
</style>