// 引入 config
const Fly = require('flyio/dist/npm/wx')
const config = new Fly()

// 配置请求基地址
// //定义公共headers
// config.config.headers={xx:5,bb:6,dd:7}
// //设置超时
// config.config.timeout=10000;
// //设置请求基地址
// config.config.baseURL="https://wendux.github.io/"

// 添加请求拦截器
config.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
config.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    // 发生网络错误后会走到这里
    // return Promise.resolve("ssss")
    console.error(err)
    return err
  }
)
// Vue.prototype.$http=config //将fly实例挂在vue原型上,可以不挂

export default config
