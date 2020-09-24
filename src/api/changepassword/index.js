import request from '../../plugins/request'

const urlParams = 'https://www.zjylz.com/api/'
export const changepasswords = apiParams => { //
    return request({
      method: 'post',
      url: urlParams + 'user/pwd/edit',
      params: apiParams,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }