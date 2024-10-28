import { service } from "../service"

export const registerUserSerivce = async (data : any)=>{
    return await service('post' , '/auth/sign-up' , data)
}

export const loginUserSerivce = async (data : any)=>{
    return await service('post' , '/auth/sign-in' , data)
}

export const getUserDataSerivce = async ()=>{
    return await service('get' , '/auth/user')
}