import axios from "axios";
import Vue from "vue";
import {ACCESS_TOKEN} from "@/store/mutation-types";
import {Notification, MessageBox} from "element-ui";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Access-Token'] = token
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
          store.dispatch('Logout').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
        }
        break
      case 403:
        Notification ({
          title: '系统提示',
          message: '拒绝访问',
          type: 'error'
        })
        break
      case 404:
        Notification ({
          title: '系统提示',
          message: '很抱歉，访问的资源未找到',
          type: 'error'
        })
        break
      case 500:
        if (token && error.response.data.message.includes('token失效')) {
          MessageBox.confirm('请重新登录', '登录已过期', {
            type: 'error',
            confirmButtonText: '重新登录'
          }).then(() => {
            store.dispatch('Logout').then(() => {
              setTimeout(() => {
                window.location.reload()
              }, 1500)
            })
          })
        }
        break
      default:
        Notification({
          title: '系统提示',
          message: error.response.data.message,
          type: 'error'
        })
     }
  }
  if (error.message) {
    if (error.message.includes('timeout')) {
      Notification({
        title: '系统提示',
        message: '网络超时',
        type: 'error'
      })
    } else {
      Notification({
        title: '系统提示',
        message: error.message,
        type: 'error'
      })
    }
  }
  return Promise.reject(error)
})

export default service;
