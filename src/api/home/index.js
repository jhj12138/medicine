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

