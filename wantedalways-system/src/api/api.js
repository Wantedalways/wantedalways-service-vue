import {get, post} from "@/api/manage";

/**
 * 获取验证码
 */
export const getCaptcha = (checkKey) => get('/sys/login/getCaptcha',{'key': checkKey});

/**
 * 账号/手机号登录
 */
export const accountLogin = (loginModel) => post('/sys/login/accountLogin', loginModel)


