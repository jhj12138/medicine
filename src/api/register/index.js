// import axios from 'axios'

// var Token = null
// if (localStorage.getItem('yzhToken')) {
//     Token = localStorage.getItem('yzhToken')
// }

// export const register = apiParams => { //
//   return axios({
//       method: 'post',
//       url: 'user/register',
//       data: apiParams
//   })
// }
import request from '../../plugins/request'

const urlParams = 'http://yzh.68hanchen.com/api/'

export const login = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/login',
    params: apiParams,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

export const register = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/register',
    params: apiParams
  })
}

export const regType = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'user/types',
    params: apiParams
  })
}

export const sendMessage = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'common/sendMessage',
    params: apiParams,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  })
}


// 找回密码

export const refund = apiParams => { //
  return request({
    method: 'POST',
    url: urlParams + 'user/refund',
    params: apiParams,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  })
}


export const list = apiParams => { //get例子
  return request({
    method: 'get',
    url: urlParams + 'user/lessionsactivity/list',
    params: apiParams
  })
}

export const regTypes = apiParams => { //
  // apiParams.Token = Token
  return request({
    method: 'get',
    url: urlParams + 'lession/detail',
    params: apiParams
  })
}


// export default {
//   // 用户注册
//   login (data) {
//     const params = data
//     return request({
//       url: urlParams + 'user/login',
//       type: 'POST',
//       params: params
//     })
//   },
  
// }

// export const login = apiParams => { //
//     return request({
//       method: 'post',
//       url: urlParams + 'user/login',
//       params: apiParams
//     })
//   }