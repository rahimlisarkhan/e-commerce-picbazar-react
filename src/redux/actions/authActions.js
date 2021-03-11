import { toast } from 'react-toastify'
import * as type from '../types'
import {baseURL} from './baseURL'



export const getRegisterAuth = data => dispatch => {
    baseURL.post('/accounts/api/register/',data)
            .then((resp) =>{ dispatch({type:type.GET_LOGIN_PAGE, payload:true }) 
                             toast.success('Successfully register')})
            .catch((err) => toast.error(err.message))
}


export const getLoginAuth = data => dispatch => {
    dispatch({type:type.GET_LOGIN_PAGE, payload:null})
    baseURL.post('/accounts/api/login/',data)
           .then((resp) =>{ console.log(resp)  
                
                //write axios 
                baseURL.defaults.headers.common['Authorization'] =`Token ${resp.data.token}`;
                
                //write local
                localStorage.setItem('token', resp.data.token)
                
                //write redux
                dispatch({type:type.IS_AUTH, payload:resp.data.token})
                dispatch({type:type.GET_LOGIN_PAGE, payload:false})

                //message
                toast.success('Welcome Back !')
            })
            .catch((err) => toast.error(err.message))
}



export const logout = (callback) => dispatch =>{
    window.localStorage.clear()
    dispatch({type:type.IS_AUTH, payload:null})
    callback('/picbazar/')
    toast.warning('Logged out')
}



//Check token
export const checkToken = token => dispatch => {
    baseURL.defaults.headers.common['Authorization'] =`Token ${token}`;
    dispatch({type:type.IS_AUTH, payload:token})
    
} 