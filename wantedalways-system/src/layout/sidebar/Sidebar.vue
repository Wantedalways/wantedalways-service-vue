<template>
  <el-aside class="sidebar" :width="isCollapse ? '64px' : '250px'">
    <div class="aside-header">
      <el-image :src="require('@/assets/logo-简-黑白.png')" class="logo"/>
      <span class="title" v-show="!isCollapse">手术器械</span>
    </div>
    <el-menu class="side-menu" :collapse="isCollapse">
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

    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.aside-header {
  height: 50px;
  background-color: #416891
}

.logo {
  height: 35px;
  margin-left: 18px;
  margin-top: 5px;
}

.title {
  font-size: 25px;
  color: #a7bdd7;
  font-weight: 600;
  position: relative;
  bottom: 7px;
  margin-left: 10px;
}

.side-menu:not(.el-menu--collapse) {
  width: 250px;
}

.side-menu {
  border: none;
  background-color: #bacbe0;
}

.sidebar {
  height: 100%;
  max-width: 250px;
  background-color: #bacbe0;
  transition: all .4s;
  overflow-x: hidden;
}
</style>
