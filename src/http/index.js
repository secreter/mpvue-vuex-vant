import fly from './config'
import qs from 'qs'
import config from '../config'
const host = config.host
// const appKey = config.appKey;
// const appid = config.appid;

/**
 * 接口模版====post
 *
 * export const test = params => {return config.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return config.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// 通用的get请求
export const get = (params) => {
  return fly.get(`${host}${params.url}`, qs.stringify(params.data))
}

// 通用的post请求
export const post = (params) => {
  return fly.post(`${host}${params.url}`, qs.stringify(params.data))
}
