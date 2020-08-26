//1.引入axios模块&字符串处理模块
import axios from 'axios'

//2.全局配置（后期请求接口，实际请求地址baseURL+url）

axios.defaults.baseURL = 'http://yzh.demoweb.68hanchen.com/api/' // 测试接口
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'



// 3.全局处理（错误统一处理，推荐发送邮件报警）
// request 请求
// response 响应
// 作用：数据交给 then处理前 先交给下面这个方法处理

/**
 * Author: sz
 * request 请求 config 一定要做请求
 * response 响应 
 */

// 请求拦截
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('yzhToken')) {
            const yzhToken = localStorage.getItem('yzhToken') || ''
            const tokenId = localStorage.getItem('tokenId') || ''
            config.headers['Authriozation'] = yzhToken
            config.headers['tokenId'] = tokenId
          }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response)
            // return Promise.resolve(response.data)
    },
    error => {
        // 对响应错误做点什么
        switch (error.response.status) {
            case 401:
                // Message.error('身份信息过期,请重新登录')
                console.log('身份信息过期,请重新登录')
                break
            case 400:
                console.log('接口不存在')
                break
            case 404:
                console.log('接口不存在')
                break
            default:
                console.log('接口不存在')
        }
        return Promise.reject(error)
    }
)