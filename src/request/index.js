import { instance } from './instance'

const ajax={
    loginStart: async function (params) {
      return await instance.get(`/miniapp/login`).then(res => res)
    }
  }
export default ajax

