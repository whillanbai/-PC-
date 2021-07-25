import { request } from './requset'

export function getPhoneLogin(phone,password){
    return request({
        url:'/login/cellphone',
        params:{
            phone,
            password,
        }
    })
}