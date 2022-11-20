<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="pagr-nav-bar">
      <van-icon name="cross" slot="left" @click="$router.back()"/>
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field v-model="user.phone" name="phone" label="手机号" 
      placeholder="请输入手机号"
      :rules="userFormRules.phone"
      type="number" maxlength="11">
        <van-icon name="manager-o" slot="left-icon" />
      </van-field>
      <van-field v-model="user.code" name="code" label="验证码" placeholder="请输入验证码" 
      type="number" maxlength="6"
      :rules="userFormRules.code">
        <van-icon name="manager-o" slot="left-icon" />
        <template #button>
            <van-count-down :time="1000 * 60" format="ss s" v-if="isCountDownShow" @finish="isCountDownShow = false"/>
          <van-button v-else size="small" type="default" round class="send-sms-btn" @click="onSendSms" native-type="button" >
            获取验证码</van-button>
            
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
/* import {sendSms,Login} from '@/api' */
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        phone: "",
        code: ""
      },
      userFormRules: {
        phone: [{
            required: true,
            message: '手机号不能为空'
        },
        {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机格式错误'
        }
        ],
        code: [
            /* {
               required: true,
               message: '请填写用户名' 
            }, */
            {
                parttern: /^\d{6}$/,
                message: '验证码错误'
            }
        ]
      },
      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      })
      try {
        /* let {data} = await Login({obile:this.user.phone,code:this.user.code}) */
        if(this.phone == '18593490927' && this.code==123456)
        this.$toast.success('登陆成功')
        /* this.$store.commit('setUser',data.data) */
        this.$store.commit('setUser',{token:'4545ad'})
        this.$router.back()
      } catch (error) {
        this.$toast.fail('error');
      }
    },
    async onSendSms() {
        try {
            await this.$refs.loginForm.validate('phone')
        } catch (error) {
            return console.log(error)
        }
        this.isCountDownShow = true 
        /* try {
          await sendSms(this.user.phone)
        } catch (error) {
          this.$toast.fail(error)
        } */
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .send-sms-btn {
    background-color: #ededed;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6bd4fb;
      border: none;
    }
  }
}
</style>
