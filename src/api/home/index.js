import request from '../../plugins/request'

const urlParams = 'http://yzh.68hanchen.com/api/'

// Banner图片
export const bannerImg = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/bannerImg',
    params: apiParams,
  })
}

// Banner数据
export const bannerList = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/banner',
    params: apiParams,
  })
}

// 技术交流展览会数据
export const homeData = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/data',
    params: apiParams,
  })
}

// 视频中心
export const homeVideo = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/video',
    params: apiParams,
  })
}

// 往届回顾
export const homeHistory = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/history',
    params: apiParams,
  })
}

// 品牌合作
export const homeCooperation = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/cooperation',
    params: apiParams,
  })
}

// 联系我们

export const honeContact = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/contact',
    params: apiParams,
  })
}

// 友情链接

export const homeLinks = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/links',
    params: apiParams,
  })
}

// 获取新闻列表

export const newsList = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'News/List',
    params: apiParams,
  })
}

// 获取资料下载
export const ServiceDownload = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/Download',
    params: apiParams,
  })
}
// Service/Download

// 获取公司信息
export const ServiceObtainCid = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainIndustry',
    params: apiParams,
  })
}

// 获取周边服务
export const ServiceTraffic = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/Traffic',
    params: apiParams,
  })
}
// 获取问题列表
export const ProblemList = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'News/ProblemList',
    params: apiParams,
  })
}

// 展会介绍
export const ServiceExhibition = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/Exhibition',
    params: apiParams,
  })
}

// 获取展会介绍的id
export const ServiceObtainBsid = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainBsid',
    params: apiParams,
  })
}

// 项目分类（国外）

export const typesAbroad = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'intenal/types/abroad',
    params: apiParams,
  })
}
// 国外合作

export const listAbroad = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'intenal/list/abroad',
    params: apiParams,
  })
}

// 项目分类（国内）
export const typesDomes = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'intenal/types/domestic',
    params: apiParams,
  })
}

// 国内合作
export const listDomes = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'intenal/list/domestic',
    params: apiParams,
  })
}

// 项目详情
export const intenalDetail = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'intenal/detail',
    params: apiParams,
  })
}

// 国际人才
export const intenalTalents = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'intenal/talents',
    params: apiParams,
  })
}

// 交流活动
export const getsayli = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/activities',
    params: apiParams,
  })
}
// 交流活动详情
export const getsayxq = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/activity/detail',
    params: apiParams,
  })
}

// 活动报名
export const activityJoin = apiParams => { 
  return request({
    method: 'post',
    url: urlParams + 'user/lessions/activity/join',
    params: apiParams,
  })
}
// 线下活动
export const offlineJoin = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'offline/activities',
    params: apiParams,
  })
}

// 线下活动详情
export const offlineDetail = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'offline/activity/detail',
    params: apiParams,
  })
}

// 课程分类
export const lessionTypes = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/types',
    params: apiParams,
  })
}
// 课程列表
export const lessionList = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/list',
    params: apiParams,
  })
}

// 课程详情

export const lessionDetail = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/detail',
    params: apiParams,
  })
}

// 评论列表

export const lessionCommentList = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/commentList',
    params: apiParams,
  })
}

// 热门课程
export const lessionHotlist = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/hotlist',
    params: apiParams,
  })
}
