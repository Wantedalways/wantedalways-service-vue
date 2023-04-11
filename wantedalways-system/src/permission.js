import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import router from "@/router";

router.beforeEach((to, from, next) => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
