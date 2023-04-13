import {get, post} from "@/api/manage";

/**
 * 获取验证码
 */
export const getCaptcha = (checkKey) => get('/sys/login/getCaptcha',{'key': checkKey});

/**
 * 账号/手机号登录
 */
export const accountLogin = (loginModel) => post('/sys/login/accountLogin', loginModel)

/**
 * 退出登录
 */
export const logout = () => post('/sys/login/logout')

/**
 * 获取当前用户权限列表
 */
export const getPermissionList = () => get('/sys/permission/getPermissionList')


