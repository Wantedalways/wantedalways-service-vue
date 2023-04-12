<template>
  <el-aside class="sidebar">
    aside
    <div @click="collapseMenu">
      <el-image :src="require('@/assets/logo-s.png')" class="logo"/>
      <span class="title" v-show="!collapse">手术器械</span>
    </div>
    <el-menu class="side-menu" :collapse="collapse">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"/>
          <span slot="title">测试</span>
        </template>
        <el-menu-item-group title="数字">
          <el-menu-item index="2-1">
            测试1
          </el-menu-item>
          <el-menu-item index="2-2">
            测试2
          </el-menu-item>
          <el-menu-item index="2-3">
            测试3
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    collapseMenu() {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style scoped>
.logo {
  width: 64px;
}

.title {
  font-size: 20px;
  color: #304156;
  font-weight: 600;
  position: relative;
  bottom: 10px;
}

.side-menu:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.sidebar {
  height: 100%;
}
</style>
