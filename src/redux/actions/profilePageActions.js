import { toast } from "react-toastify"
import * as type from '../types'
import { baseURL } from "./baseURL"



export const getUser = () => dispatch => {
    baseURL.get('/accounts/api/user-profile/')
           .then(res =>dispatch({type:type.GET_USER_INFO,payload:res.data}))
           .catch(err => toast.error(err))
}


export const createUserInfo = data => dispatch =>{
    baseURL.put('/accounts/api/user-profile/',data)
            .then(res =>{console.log(res.data)
                        toast.success('Profile information updated ')
                        dispatch({type:type.GET_USER_INFO,payload:res.data})
            })
            .catch(err => toast.error(err.message))

}