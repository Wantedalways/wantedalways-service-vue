<template>
  <el-container class="container">
    <sidebar :is-collapse="isCollapse"/>
    <el-container>
      <navbar :is-collapse="isCollapse" @collapseMenu="collapseMenu"/>
      <el-main>
        main
      </el-main>
      <el-footer>
        foot
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/layout/sidebar/Sidebar.vue";
import Navbar from "@/layout/navbar/Navbar.vue";

export default {
  name: "BaseLayout",
  components: {Navbar, Sidebar},
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    collapseMenu() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
