<template>
  <div class="container">
    <el-row>
      <!--背景图片-->
      <el-col :span="16">
        <el-image :src="require('./assets/background.svg')" />
      </el-col>
      <el-col :span="6">
        <div>
          <!--系统简介-->
          <div>
            <div>
              <a href="/">
                <el-image :src="require('@/assets/logo.png')" />
                <span>新华手术器械</span>
              </a>
            </div>
            <div>
              手术器械OA平台
            </div>
          </div>

          <!--登录表单-->
          <div>
            <el-form>
              <!--登陆选项-->
              <el-tabs>
                <!--账号或手机号登录-->
                <el-tab-pane label="密码登录">
                  <account-login />
                </el-tab-pane>

                <!--企业微信扫码登录-->
                <el-tab-pane label="扫码登录" disabled>
                </el-tab-pane>
              </el-tabs>

              <!--自动登录-->
              <el-form-item>
                <el-checkbox checked>自动登录</el-checkbox>
              </el-form-item>

              <!--登录按钮-->
              <el-form-item>
                <el-button type="primary">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <!--页脚-->
      <div>
        Copyright &copy; 2023 <a href="https://www.wantedalways.cn" target="_blank">Wantedalways</a> 出品
      </div>
    </el-row>
  </div>
</template>

<script>
import AccountLogin from "@/views/login/AccountLogin.vue";

export default {
  name: "Login",
  components: {AccountLogin}
}
</script>

<style scoped>
  .container {
    height: 100%;
    position: relative;
  }
</style>
