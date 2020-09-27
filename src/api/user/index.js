import request from '../../plugins/request'

const urlParams = 'https://www.zjylz.com/api/'

// 获取国家
export const OnlineCode = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/OnlineCode',
    params: apiParams,
  })
}
//判断是否报名
export const ObtainOid = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/Exhibitorinfo/Obtainoid',
    params: apiParams,
  })
}
export const exRegister = apiParams => { //
  return request({
    method: 'POST',
    url: urlParams + 'Exhibitorinfo/Register',
    params: apiParams,
  })
}
//修改个人用户信息
export const edit = apiParams => { //
  return request({
    method: 'POST',
    url: urlParams + 'user/info/edit',
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
 // 展商报名第一步 已登录信息回填
export const ObtainCid = apiParams => { //
  return request({
    url: urlParams + 'Exhibitorinfo/ObtainCid',
    method: 'get',
    params: apiParams
  })
}
  // 展商报名第二步 获取展位信息
export const exhibitionBooth = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo.ashx',
    method: 'get',
    params: apiParams
  })
}
  // 展商报名第二步 提交展位申请
export const exhibitionOrderAdd = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo/Order/Add',
    method: 'POST',
    params: apiParams
  })
}
  // 展商报名第二步 重新提交
export const exhibitionOrderModify = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo/ModifyOrder',
    method: 'POST',
    params: apiParams
  })
}
  // 展商报名第三步 审核状态 下载申请表
export const exhibitionOrderObtain = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo/Order/Obtain',
    method: 'GET',
    params: apiParams
  })
}
  // 展商报名第四步 获取平台账号信息

export const exhibitionObtainrbInvoice = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo/ObtainrbInvoice',
    method: 'GET',
    params: apiParams
  })
}
  // 展商报名第四步 上传付款凭证

export const exhibitionVoucher = apiParams => { //
  return request({
    url: urlParams + '/Exhibitorinfo/voucher',
    method: 'POST',
    params: apiParams
  })
}
//获取bsid
export const exhibitionGetBsid = apiParams => { //
  return request({
    url: urlParams + 'Exhibitorinfo/ObtainBsid',
    method: 'get',
    params: apiParams
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

// 我参与的课程

export const userLession = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/user/lessions',
    params: apiParams,
  })
}
// 我学习的课程删除
export const userLessionDel = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + '/user/lession/del',
    params: apiParams,
  })
}
// 我关注的商品列表
export const userCollection = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/user/collection/list',
    params: apiParams,
  })
}

// 我关注的商品删除
export const userCollectionDel = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + '/user/collection/del',
    params: apiParams,
  })
}
// 线下活动
export const activities = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'user/lessionsactivity/list',
    params: apiParams,
  })
}
// 删除线下活动
export const delactivities = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/lessions/activity/del',
    params: apiParams,
  })
}
// 获取站内信
export const usermessagelist = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/user/message/list',
    params: apiParams,
  })
}
//删除站内信
export const del = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/message/del',
    params: apiParams,
  })
}
//获取课程
export const lessions = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'api/user/lessions',
    params: apiParams,
  })
}
//用户评论列表
export const commentlist = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'user/lession/comment/list',
    params: apiParams,
  })
}
//删除评论列表
export const delcommentlist = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/lession/comment/del',
    params: apiParams,
  })
}
//获取参展信息
export const getlists = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'user/exhibition/list',
    params: apiParams,
  })
}
//获取公司信息
export const getcompany = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/company/Obtain',
    params: apiParams,
  })
}
//获取参展人员信息
export const getParticipants = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/Participants',
    params: apiParams,
  })
}