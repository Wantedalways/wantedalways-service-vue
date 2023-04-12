<template>
  <el-container class="container">
    <sidebar/>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-container>
        <el-main>
          main
        </el-main>
        <el-footer>
          foot
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/layout/sidebar/Sidebar.vue";

export default {
  name: "BaseLayout",
  components: {Sidebar},
  methods: {}
}
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
