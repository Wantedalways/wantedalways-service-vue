import axios from "axios";
import {MessageBox, Message} from "element-ui";
import Vue from "vue";
import {ACCESS_TOKEN} from "@/store/mutation-types";

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
  console.log(error)
})

export default service;
