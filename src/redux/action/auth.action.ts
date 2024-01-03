import { Dispatch } from "redux"
import { ILogin, IRegister } from "../../interface/IAuth"
import { loginAPI, registerAPI, verifiedAPI } from "../api/api.auth"
import * as types from '../types/auth.type'

export const registerUserAction = (payload: IRegister) => {
    return async (dispatch: any) => {
        try {
            debugger
            const response = await registerAPI(payload)
            dispatch({
                type: types.SET_USER,
                payload: {
                  token: response?.data?.token,
                  user: response?.data?.user,
                }
            })  
        } catch (err) {
            console.error('[register]', err)
            throw err
        }
    }
}

// export const loginAction = (payload: ILogin) => {
//     return async (dispatch: Dispatch) => {
//         try {
//             debugger
//             const response = await loginAPI(payload)
//             dispatch({
//                 type: types.LOGIN_SUCCESS,
//                 payload: {
//                     token: response.data && response.data.token
//                 }
//             })
//         } catch (err) {
//             console.error('[loginAction]', err)
//             throw err
//         }
//     }
// }

export const verified = (token: string) => {
    return async (dispatch: any) => {
        try {
            const response = await verifiedAPI(token)
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: {
                    token: response.data && response.data.access_token
                }
            })
        } catch (err) {
            console.error('[loginAction]', err)
            throw err
        }
    }
}

export const loginSuccess = (token: string) => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        token: token,
    },
});

export const loginAction = (payload: ILogin) => {
    return async (dispatch: Dispatch) => { // Use Dispatch type
        try {
            const response = await loginAPI(payload);
            dispatch(loginSuccess(response.data.token));
        } catch (err) {
            console.error('[loginAction]', err);
            throw err;
        }
    };
};