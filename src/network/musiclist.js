import { request } from './requset'

export function getMusicList() {
  return request({
    url:'http://localhost:3000/recommend/resource'
  })
}