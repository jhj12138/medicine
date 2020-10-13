import request from '../../plugins/request'

const urlParams = 'https://www.zjylz.com/api/'
// 获取展商详细信息
export const getObtainraccount = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/Obtainraccount',
    params: apiParams,
  })
}
// 上传图片
export const uploadimg = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'common/upload',
    params: apiParams,
    qs:false,
    // dataType:"text",
    // processData: false, // 告诉jQuery不要去处理发送的数据
    // contentType: false, // 告诉jQuery不要去设置Content-Type请求头
    headers:{
      'Content-Type':"multipart/form-data;; boundary=----WebKitFormBoundary63R1rrC1hCecnsfk"
    }
  })
}
//添加证书
export const ADDCertificate = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + '/Exhibitorinfo/ADDCertificate',
    params: apiParams,
  })
}
//修改展商信息
export const companyAdd = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'Exhibitorinfo/company/Add',
    params: apiParams,
  })
}

//删除商品信息
export const DELcommodity = apiParams => { //
  return request({
    method: 'POST',
    url: urlParams + 'Exhibitorinfo/DELcommodity',
    params: apiParams,
  })
}
//添加商品信息
export const exhibitionAddGoods = apiParams => { //
  return request({
    method: 'POST',
    url: urlParams + '/Exhibitorinfo/ADDcommodity',
    params: apiParams,
  })
}
//获取展商列表
export const getlist = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/list',
    params: apiParams,
  })
}
//获取参展人员
export const Participants = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/Exhibitorinfo/Participants',
    params: apiParams,
  })
}

// Banner图片
export const bannerImg = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/bannerImg',
    params: apiParams,
  })
}
//修改密码
export const changepassword = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'user/pwd/edit',
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
// 往届回顾详情跳转
export const homeHistorycontent = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'hone/Historycontent',
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
    url: urlParams + 'Exhibitorinfo/keyword',
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
//课程评论
export const lessionComment = apiParams => { 
  return request({
    method: 'get',
    url: urlParams + 'lession/commentList',
    params: apiParams,
  })
}
//评论课程
export const getcomm = apiParams => { 
  return request({
    method: 'POST',
    url: urlParams + '/user/lession/comment',
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
// 网上展厅图
export const getsx = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Service/Onlineexhibition',
    params: apiParams,
  })
}
// 获取展商列表
export const getobt = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainCompanyList',
    params: apiParams,
  })
}
// 获取行业列表
export const getoar = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainIndustry',
    params: apiParams,
  })
}
// 查询商家列表
export const getqc = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/FrontCompanyList',
    params: apiParams,
  })
}
// 公司行业
export const getar = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainIndustry',
    params: apiParams,
  })
}

// 获取展位联系我们
export const ObtainContactUs = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainContactUs',
    params: apiParams,
  })
}

// 获取展商信息
export const Obtaincommodity = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/Obtaincommodity',
    params: apiParams,
  })
}

// 商品详情
export const exhibitorcommoditys = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/commodity',
    params: apiParams,
  })
}
// 添加商品
export const AddgoodsContent = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainProductType',
    params: apiParams,
  })
}
// 获取证书列表
export const getObtainCertificate = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainCertificate',
    params: apiParams,
  })
}
// 修改证书列表
export const EditCertificate = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'Exhibitorinfo/EditCertificate',
    params: apiParams,
  })
}
// 获取新闻详情
export const NewsContent = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'News/Content',
    params: apiParams,
  })
}
//获取展商列表
export const getexlist = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/list',
    params: apiParams,
  })
}
//获取发票信息
export const getObtainInvoiceList = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + 'Exhibitorinfo/ObtainInvoiceList',
    params: apiParams,
  })
}
//获取发票信息xxx
export const getObtain = apiParams => { //
  return request({
    method: 'get',
    url: urlParams + '/Exhibitorinfo/Invoice/Obtain',
    params: apiParams,
  })
}
//添加发票信息
export const addObtainInvoiceList = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + 'Exhibitorinfo/ADDInvoice',
    params: apiParams,
  })
}
//编辑发票信息
export const exhibitionEditInvoice = apiParams => { //
  return request({
    method: 'post',
    url: urlParams + '/Exhibitorinfo/EditInvoice',
    params: apiParams,
  })
}


