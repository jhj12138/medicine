import axios from 'axios'


// export const register = apiParams => { //
//   return axios({
//       method: 'post',
//       url: 'user/register',
//       data: apiParams
//   })
// }

export const login = apiParams => { //
  return axios({
    method: 'post',
    url: 'user/login',
    params: apiParams
  })
}

export const register = apiParams => { //
  return axios({
    method: 'post',
    url: 'user/register',
    params: apiParams
  })
}

export const regType = apiParams => { //
  return axios({
    method: 'get',
    url: 'user/types',
    params: apiParams
  })
}

export const sendMessage = apiParams => { //
  return axios({
    method: 'post',
    url: 'common/sendMessage',
    params: apiParams
  })
}


// 找回密码

export const refund = apiParams => { //
  return axios({
    method: 'patch',
    url: 'user/refund',
    params: apiParams
  })
}


export const list = apiParams => { //get例子
  return axios({
    method: 'get',
    url: 'user/lessionsactivity/list',
    params: apiParams
  })
}