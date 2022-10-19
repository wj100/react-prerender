import axios from 'axios'
axios.defaults.withCredentials = true
const baseUrl = 'https://entry.qiye.163.com'
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 8 * 1000
})
//请求拦截

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.error(error))
// 响应拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res.data)
    } else {
      alert('网络异常')
      Promise.reject(res)
    }
  },
  error => {
    alert('网络异常')
    const { response } = error
    if (response) {
      return Promise.reject(response)
    }
  })
export { instance }
