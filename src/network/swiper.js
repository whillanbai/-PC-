import { request } from './requset'

export function getSwiper() {
  return request({
    url:'/banner'
  })
}