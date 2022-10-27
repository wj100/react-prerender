import { instance } from './instance'

const ajax={
    getCategory: async function (params) {
      return await instance.get(`/api/outdoorFurniture/queryOutdoorFurnitureCategory`).then(res => res.data)
    },
    getProducts:async function(){
        return await instance.get(`api/outdoorFurniture/queryOutdoorFurnitureList?category=Table&pageIndex=1&pageSize=2`).then(res=>res)
    }
  }
export default ajax

