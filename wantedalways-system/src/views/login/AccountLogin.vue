<template>
  <div>
    <el-form ref="loginForm" :rules="verifyRules" :model="loginInfo">
      <el-form-item prop="account">
        <el-input v-model="loginInfo.account" placeholder="用户账号/手机号" prefix-icon="el-icon-user" clearable />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginInfo.password" type="password" placeholder="密码" prefix-icon="el-icon-key" clearable show-password />
      </el-form-item>
      <el-row>
        <el-col :span="16">
          <el-form-item prop="captcha">
            <el-input v-model="loginInfo.captcha" placeholder="验证码" prefix-icon="el-icon-milk-tea" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-image v-if="isCaptchaSuccess" :src="captchaImage" class="captcha" fit="contain" @click="handleCaptcha" />
          <el-image v-else :src="require('./assets/404.svg')" class="captcha" fit="contain" @click="handleCaptcha" />
        </el-col>
      </el-row>
      <el-form-item>
        <el-checkbox checked>自动登录</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getCaptcha} from "@/api/api";

export default {
  name: "AccountLogin",
  data() {
    return {
      // 登录表单
      loginInfo: {
        account: '',
        password: '',
        captcha: ''
      },
      // 验证码
      isCaptchaSuccess: false,
      captchaImage: '',
      checkKey: '',
      // 登录类型（0，用户名登录（默认）；1，手机号登录）
      loginType: 0,
      // 登录按钮加载状态
      loading: false,
      // 表单验证规则
      verifyRules: {
        account: [
          {required: true, message: '请输入用户账号或手机号', trigger: 'blur'},
          {validator: this.usernameOrPhone}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        captcha: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {

    /**
     * 判断登录方式为用户名或手机号
     */
    usernameOrPhone(rule, value, callback) {
      const regex = /^1[3-9]\d{9}$/;
      if (regex.test(value)) {
        this.loginType = 1;
      } else {
        this.loginType = 0;
      }
      callback()
    },

    /**
     * 获取验证码
     */
    handleCaptcha() {
      this.checkKey = new Date().getTime()
      this.loginInfo.captcha = ''

      getCaptcha(this.checkKey).then(res => {
        if (res.success) {
          this.isCaptchaSuccess = true
          this.captchaImage = res.data
        } else {
          this.$message.error(res.message)
          this.isCaptchaSuccess = false
        }
      }).catch(() => {
        this.isCaptchaSuccess = false
      })
    },

    /**
     * 登录
     */
    handleLogin() {
      // 表单验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true

          let loginModel = {
            account: this.loginInfo.account,
            password: this.loginInfo.password,
            captcha: this.loginInfo.captcha,
            checkKey: this.checkKey
          }
        }
      })
    }
  },
  created() {
    this.handleCaptcha()
  }
}
</script>

<style scoped>
  .captcha {
    max-height: 40px;
  }

  .login-button {
    width: 100%;
  }
</style>
