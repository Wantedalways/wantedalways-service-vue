<template>
  <div>
    <el-form :rules="verifyRules" :model="loginInfo">
      <el-form-item prop="account">
        <el-input v-model="loginInfo.account" placeholder="用户账号/手机号" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginInfo.password" type="password" placeholder="密码" prefix-icon="el-icon-key" />
      </el-form-item>
      <el-row>
        <el-col :span="16">
          <el-form-item prop="captcha">
            <el-input v-model="loginInfo.captcha" placeholder="验证码" prefix-icon="el-icon-milk-tea" />
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-image :src="require('./assets/404.svg')" class="captcha" fit="contain" />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AccountLogin",
  data() {
    return {
      loginInfo: {
        account: '',
        password: '',
        captcha: ''
      },
      // 表单验证规则
      verifyRules: {
        account: [
          {required: true, message: '请输入用户账号或手机号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        captcha: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped>
  .captcha {
    max-height: 40px;
  }
</style>
