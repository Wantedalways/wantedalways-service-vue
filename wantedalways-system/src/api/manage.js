import request from "@/util/request";

/**
 * get请求
 */
export function get(url, parameter) {

  return request({
    url: url,
    method: 'get',
    params: parameter
  })
}
