<template>
  <div id = "register">
    <div class="register_top">
      <div class="register_return" @click="goReturn">
        <img src="../../assets/image/mine_return.png" alt="">
      </div>
      <div class="register_middle">展商注册</div>
    </div>
    <div class="register_con">
      <div class="register_con_input">
        <div class="register_con_name">用户名称</div>
        <div class="register_con_inputs">
          <input type="text" placeholder="请输入用户名称" v-model="UserName">
        </div>
      </div>
      <!-- <div class="register_con_name">性别</div> -->
      <div class="register_con_input">
        <div class="register_con_name">联系电话</div>
        <div class="register_con_inputs">
          <input type="text" placeholder="请输入联系电话" v-model="Phone">
        </div>
      </div>
      <div class="register_con_input">
          <div class="register_con_name">验证码</div>
          <div class="register_con_inputs">
            <input type="text" placeholder="请输入验证码" v-model="Code">
            <div class="getcode_box" @click="getCodeMethod">
              <div :class="[getCodeFlag?'getcode_text': 'getcode_text_else']">{{getCodeText}}</div>
            </div>
          </div>
        </div>
      <div class="register_con_input">
        <div class="register_con_name">密码</div>
        <div class="register_con_inputs">
          <form>
          <input type="password" placeholder="请输入密码" v-model="UserPwd" autocomplete="off">
          </form>
        </div>
      </div>
      <!-- <div class="register_con_input">
        <div class="register_con_name">账户类型</div>
        <div class="comrel_con_inp1">
       <van-field
          readonly
          clickable
          :value="value"
          placeholder="请选择"
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
      </div> -->
      <!-- <div class="register_con_input">
        <div class="register_con_name">所属公司</div>
        <div class="register_con_inputs">
          <input type="text" placeholder="请输入所属公司" v-model="Company">
        </div>
      </div> -->
      <div class="register_con_input">
        <div class="register_con_name">联系人姓名</div>
        <div class="register_con_inputs">
          <input type="text" placeholder="请输入联系人姓名" v-model="ContactPerson">
        </div>
      </div>
      <div class="register_con_input">
        <div class="register_con_name">职务</div>
        <div class="register_con_inputs">
          <input type="text" placeholder="请输入职务" v-model="post">
        </div>
      </div>
      <div class="register_con_input">
        <van-collapse v-model="activeNames" class="sex" :border = "false" ref="checkbox" >
          <van-collapse-item :title='sexx' name="1" :border = "false" :toggle= 'flagss' >
            <p @click="changgesex(1)">男</p>
            <p @click="changgesex(2)">女</p>
          </van-collapse-item>
      </van-collapse>
      </div>
      
      <div class="retPass_con_btn" @click="goSubmit">
        <div class="retPass_con_btns">下一步</div>
      </div>
      <div class="register_tiao">
        <van-radio-group v-model="radio">
          <van-radio name="1" icon-size="15px" >我已阅读并同意使用条款和隐私条约</van-radio>
        </van-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import {register,regType,sendMessage,list} from '../../api/register'
import {exRegister} from '../../api/user'
import { Toast } from 'vant';
export default {
  data() {
    return{
      activeNames: [],
      getCodeFlag:true,
      getCodeText: '获取验证码',
      times: 60,
      value: '',
      columns: [],
      con:[],
      showPicker: false,
      radio: '0',
      UserName:'',
      Phone:'',
      Code:'',
      UserPwd:'',
      Company:'',
      ContactPerson:'',
      Email:'',
      UserType:'',
      post:"",
      sexx:'性别',
      flagss:true
    }
  },
  methods:{
    changgesex(sum){
      console.log(sum)
      if(sum=="1"){
        this.sexx = '男'
        //  this.$refs.checkbox.toggle(this.flagss);
      }else{
        this.sexx = '女'
      //  this.$refs.checkbox.toggle(this.flagss);
      }
    },
    goReturn(){
      this.$router.push('/login')
    },
    // 获得验证码
    getCodeMethod() {
      if(!this.Phone) {
        Toast({
          message: '请输入手机号',
        });
        return
      };
      if (!this.getCodeFlag) return; //验证码倒计时是否完成
      this.getCodeText = `${this.times}s重新获取`
      this.getCodeFlag = false
      const data = {
        telephone: this.Phone
      }
      sendMessage(data).then((res) => {
        Toast({
          message: '验证码请在1分钟之内使用',
        });
        console.log(res)
      })
      const timer = setInterval(() => {
        if (this.times <= 0) {
          clearInterval(timer)
          this.getCodeText = "获取验证码"
          this.getCodeFlag = true
          this.times = 60
          return
        }
        this.times--
        this.getCodeText = `${this.times}s重新获取`
      }, 1000);
    },
    onConfirm(value,index) {
      this.value = value;
      this.UserType = this.con[index]
      this.showPicker = false;
    },
    goSubmit() {      
      if(!this.UserName){Toast('请输入用户名');return}
      if(!this.UserPwd){Toast('请输入密码');return}
      if(!this.Phone){Toast('请输入联系电话');return}
      // if(!this.UserType){Toast('请选择账户类型');return}
      // if(!this.Company){Toast('请输入公司名称');return}
      if(!this.ContactPerson){Toast('请输入联系人姓名');return}
      // if(!this.Email){Toast('请输入邮箱地址');return}
      if(!this.Code){Toast('请输入验证码');return}
      if(this.UserPwd.length < 6){Toast('密码需要大于六位数');return}
      if (!(/^1[3456789]\d{9}$/.test(this.Phone))){Toast('联系人电话有误');return} 
      // if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.Email))){Toast('邮箱有误');return} 
      if(this.radio=="0"){Toast('请同意使用条款');return}

        
      console.log(this.radio)
      if(this.sexx = '男'){
        this.sum1 = 2
      }else{
        this.sum1 = 1
      }
      const data = {
        action:"Register",
        UserName: this.UserName,
        UserPwd: this.UserPwd,
        Phone: this.Phone,
        sex:this.sum1,
        name: this.ContactPerson,
        post: this.post,
        Code: this.Code,
      }
      console.log(data)
      exRegister(data).then((res) => {
        if(res.Success){
          console.log(res)
          // Toast(res.Msg);
            // Toast({
            //   message: '注册成功',
            // });
            // this.$router.push('/login')
            this.$router.push({ path: '/accnform1', query: { flagss: false,eid:res.Data} })
        } else {
          Toast(res.Msg);
          // console.log("111",res)
        }
      })
    },
  },
  mounted(){
    regType().then((res) => {
      if(res.Success){
        var newDate = res.Data
        newDate.forEach(ele=>{
          this.columns.push(ele.Name)
          this.con.push(ele.Id)
        })
      }
    })
  }
}
</script>

<style lang="scss">
@function px($px){
  $rem: 75;
  @return ($px/ $rem) + rem;
}
#register{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
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
  .register_top{
    height: px(100);
    display: flex;
    align-items: center;
    padding: 0 px(20);
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #fff;
    border:1px solid rgba(229,229,229,.5);
    .register_return{
      width: px(21);
      img{
        width: 100%;
      }
    }
    .register_middle{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size: 16px;
    }
  }
  .sex{
  }
  .van-cell{
    padding: 0;
    font-size: px(32);
  }
  .register_con{
    margin-top: px(130);
    .register_con_input{
        padding: 0 px(48);
        margin-top: px(30);
        .register_con_name{
          color: #333333;
          font-size: 16px;
        }
        .register_con_inputs{
          height: px(78);
          border-bottom: 1px solid rgba(229,229,229,1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: px(30);
          input{
            border: none;
            font-size: 16px;
          }
          .getcode_text{
            font-size:16px;
            color:rgba(64,97,247,1);
            line-height:40rpx;
          }
          .getcode_text_else{
            font-size:16px;
            color:#A2A6B3;
            line-height:40rpx;
          }
        }
        .comrel_con_inp1{
          height: px(78);
          // padding: 0 px(32);
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
              input{
                font-size: 16px;
              }
            }
            .van-icon{
              display: none;
            }
          }
          .comrel_up{
            position: absolute;
            width: px(30);
            right: px(16);
            z-index: 9;
            top:50%;
            transform: translateY(-50%);
            img{
              width: 100%;
            }
          }
        }
      }
      .retPass_con_btn{
        width:100%;
        height: px(90);
        display: flex;
        align-items: center;
        justify-content: center;
        color:rgba(255,255,255,1);
        margin-top: px(52);
        .retPass_con_btns{
          background: #2B75D9;
          width: px(686);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: px(45);
          font-size: 16px;
        }
      }
      .register_tiao{
        width: 100%;
        // padding: 0 px(140);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: px(30) 0;
        .van-radio-group{
          // position: absolute;
          // left: 50%;
          // transform: translateY(-50%);
        }
      }
  }
}

</style>