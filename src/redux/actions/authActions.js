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

    console.log(data);

    baseURL.post('/accounts/api/login/',data)
           .then((resp) =>{ console.log(resp)  
                let userToken =resp.data.token
                
                //write axios 
                baseURL.defaults.headers.common['Authorization'] =`Bearer ${userToken}`;
                
                //write local
                localStorage.setItem('token', userToken)
                
                //write redux
                dispatch({type:type.IS_AUTH, payload:userToken})
                dispatch({type:type.GET_USER_INFO, payload:resp.data})
                dispatch({type:type.GET_LOGIN_PAGE, payload:false})

                //message
                toast.success('Welcome Back !')
            })
            .catch((err) => toast.error(err.message))
}
