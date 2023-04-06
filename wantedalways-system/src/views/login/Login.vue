<template>
  <div class="container">
    <div class="main">
      <div class="form">
        <div class="form-header">
          <a href="/">
            <el-image :src="require('@/assets/logo.png')" class="logo"/>
            <span class="title">手术器械</span>
          </a>
          <div class="desc">手术器械OA平台</div>
        </div>
        <div class="form-main">
          <el-tabs class="type" stretch>
            <el-tab-pane label="密码登录">
              <account-login/>
            </el-tab-pane>
            <el-tab-pane label="扫码登录" disabled>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="footer">
      Copyright &copy; 2023 <a href="https://www.wantedalways.cn" target="_blank">Wantedalways</a> 出品
    </div>
  </div>
</template>

<script>
import AccountLogin from "@/views/login/AccountLogin.vue";

export default {
  name: "Login",
  components: {AccountLogin},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  position: relative;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
}

.main {
  background: url(~@/views/login/assets/background.svg) no-repeat 20%;
  background-size: auto;
  height: 100%;
  padding: 10%;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;

  .form {
    max-width: 350px;
    position: relative;
    left: 65%;
  }
}

.type {
  font-size: 18px;
}

.footer {
  text-align: center;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.form-header {
  text-align: center;

  .logo {
    height: 70px;
    vertical-align: bottom;
    margin-right: 5px;
  }

  .title {
    font-size: 20px;
    color: #304156;
    font-weight: 600;
    position: relative;
    bottom: 10px;
  }

  .desc {
    font-size: 15px;
    color: #304156;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}

a {
  text-decoration: none;
}

</style>
