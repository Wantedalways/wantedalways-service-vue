<template>
  <el-header class="header-wrapper">
    <div class="nav-header">
      <i :class="!isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" class="icon" @click="collapseMenu" />
    </div>
    <div class="nav-tab">
      面包屑
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {

    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    collapseMenu() {
      this.$emit('collapseMenu')
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  padding: 0;
  width: 100%;
  min-height: 90px;
}
.nav-header {
  background-color: #416891;
  height: 50px;
}

.icon {
  margin-left: 10px;
  margin-top: 10px;
  color: aliceblue;
  font-size: 30px;
}

.nav-tab {
  height: 40px;
  background-color: #ffffff;
}
</style>
