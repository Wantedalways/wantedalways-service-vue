import {get} from "@/api/manage";

/**
 * 登录
 */
export const getCaptcha = (checkKey) => get('/sys/login/getCaptcha', {'key': checkKey});


