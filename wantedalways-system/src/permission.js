import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import router from "@/router";
import Vue from "vue";
import {ACCESS_TOKEN} from "@/store/mutation-types";
import store from "@/store";

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (Vue.ls.get(ACCESS_TOKEN)) {
    // token存在
    if (to.path === '/login/accountLogin') {
      // 登陆界面则默认进入首页
      next({path: '/'})
      NProgress.done()
    } else {
      if (store.getters.permissionList.length === 0) {
        // 未获取权限列表
        store.dispatch('GetPermissionList').then(res => {
          const menu = res.data.menu
        })
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
