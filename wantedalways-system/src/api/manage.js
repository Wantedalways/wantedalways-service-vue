import request from "@/util/request";

/**
 * get请求
 */
export function get(url, param) {

  return request({
    url: url,
    method: 'get',
    params: param
  })
}

export function post(url, param) {

  return request({
    url: url,
    method: 'post',
    data: param
  })
}
