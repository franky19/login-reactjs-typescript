import { ILogin, IRegister } from "../../interface/IAuth"
import { API } from "./api.middleware"

export const loginAPI = async (data:ILogin) => {
    return await API({
        url : '/login' ,
        method : 'POST',
        data
    }).then( res => res.data )
}

export const registerAPI = async (data:IRegister) => {
    return await API({
        url : '/register' ,
        method : 'POST',
        data
    }).then( res => res.data )
}

export const verifiedAPI = async (token:string) => {
    return await API({
        url : `/api/verified/${token}` ,
        method : 'GET'
    }).then( res => res.data )
}