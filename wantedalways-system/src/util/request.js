import axios from "axios";
import Vue from "vue";
import {ACCESS_TOKEN} from "@/store/mutation-types";
import {Notification} from "element-ui";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers[ACCESS_TOKEN] = token
  }

  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data
}, error => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  // 处理异常响应
  if (error.response) {
    switch (error.response.status) {
      case 401:
        Notification ({
          title: '系统提示',
          message: '登录已过期，请重新登陆',
          type: 'error'
        })
        if (token) {
          // token存在，则执行登出操作
          store.dispatch('Logout')
        }
    }
  }
})

export default service;
