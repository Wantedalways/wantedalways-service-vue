<template>
  <div>
    <el-form-item>
      <el-input placeholder="用户账号/手机号" prefix-icon="el-icon-user" />
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="密码" prefix-icon="el-icon-key" />
    </el-form-item>
    <el-row>
      <el-col :span="16">
        <el-form-item>
          <el-input placeholder="验证码" prefix-icon="el-icon-milk-tea" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-image :src="require('./assets/404.svg')" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AccountLogin"
}
</script>

<style scoped>

</style>
