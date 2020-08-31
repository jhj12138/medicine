'use strict'
import axios from 'axios'
import qs from 'qs'
// import { alertMessage } from './message'

const service = axios.create({
  timeout: 9000
})
// 全局拦截请求
service.interceptors.request.use(config => {
//  loadOpen()
  return config
}, error => {
  Promise.reject(error)
})
// 全局拦截响应
service.interceptors.response.use(response => {
//  loadClose()
  const json = response.data
  if (json.status) {

  } else {
    return json
  }
}, error => {
//  loadClose()
  return Promise.reject(error)
})

// ajax entry
const suffix = '' // 后缀
// nginx 大屏代理
const screenProxy = ''
const ajax = function (obj) {
  // loadOpen()
  const _suffix = obj.suffix !== undefined ? obj.suffix : suffix
  const url = screenProxy + obj.url + _suffix
  const type = obj.method ? obj.method.toUpperCase() : 'POST'
  const headers = {
    headers: obj.headers || { 'Content-Type': 'application/x-www-form-urlencoded' }
  }

  const params = obj.params || {}
  params.Token = localStorage.getItem('yzhToken')
  switch (type) {
    case 'GET':
      return service.get(url, { params: params })
    case 'POST':
      return service.post(url, qs.stringify(params), headers)
    case 'PUT':
      return service.put(url, params, headers)
    case 'DELETE':
      return service.delete(url, params, headers)
    case 'PATCH':
      return service.patch(url, params, headers)
    default:
      break
  }
}
export default ajax
