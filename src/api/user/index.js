import request from '../../plugins/request'

const urlParams = 'http://yzh.68hanchen.com/api/'

// 获取国家
export const OnlineCode = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/OnlineCode',
    params: apiParams,
  })
}
// 报名参加展会

export const userJoin = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/exhibition/join',
    params: apiParams,
  })
}

// 报名参加展会（未登录）

export const userNoLogin = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/exhibition/noLogin/join',
    params: apiParams,
  })
}

// 报名参加展会编辑 
export const joinEdit = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/exhibition/joinEdit',
    params: apiParams,
  })
}
// 我参加的展会目的
export const joinEditList = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'user/purpose/get',
    params: apiParams,
  })
}