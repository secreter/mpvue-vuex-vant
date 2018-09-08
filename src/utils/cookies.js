/*
* 模拟写一个Cookies
* */
import dayjs from 'dayjs'
const NAMESPACE = 'cookies_'
const POSTFIX = '_expired'
/**
 * 获取cookies,过期的获取不到并删除
 * @param key
 * @returns {*}
 */
export const getCookies = (key) => {
  key = NAMESPACE + key
  let value = wx.getStorageSync(key)
  let expired = wx.getStorageSync(key + POSTFIX)
  if (expired && expired < dayjs().unix()) {
    wx.removeStorageSync(key)
    wx.removeStorageSync(key + POSTFIX)
    return
  }
  try {
    value = JSON.parse(value)
  } catch (e) {
    // pass
  }
  return value
}
/**
 * 设置cookies,可以带过期时间，相对时间s
 * @param key
 * @param value
 * @param expire seconds
 */
export const setCookies = (key, value, expire) => {
  key = NAMESPACE + key
  try {
    value = JSON.stringify(value)
  } catch (e) {
    // pass
  }
  wx.setStorageSync(key, value)
  if (expire) {
    let expired = dayjs().add(expire, 'seconds').unix()
    wx.setStorageSync(key + POSTFIX, expired)
  }
}
