import {accountLogin, logout} from "@/api/api";
import Vue from "vue";
import {ACCESS_TOKEN, USER_INFO} from "@/store/mutation-types";
import {Notification} from "element-ui";

const user = {
  state: {
    token: '',
    userInfo: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 用户账号/手机号登录
     */
    Login({ commit }, loginModel) {
      return new Promise((resolve, reject) => {
        accountLogin(loginModel).then(res => {
          if (res.code === 200) {
            const result = res.data
            const userInfo = result.sysUser

            Vue.ls.set(ACCESS_TOKEN, res.token, 7 * 24 * 60 * 60 * 1000)
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000)

            commit('SET_TOKEN', res.token)
            commit('SET_USER_INFO', userInfo)
            resolve(res)
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 退出登录
     */
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          if (res.code === 500) {
            Notification({
              type: 'error',
              title: '错误',
              message: res.message
            })
            reject(res)
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        });

        Vue.ls.remove(ACCESS_TOKEN)
        Vue.ls.remove(USER_INFO);
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', '')
      })
    }
  }
}

export default user
