import { toast } from "react-toastify"
import * as type from '../types'
import { baseURL } from "./baseURL"



export const getUser = () => dispatch => {

    baseURL.get('/accounts/api/user-profile/')
           .then(res =>dispatch({type:type.GET_USER_INFO,payload:res.data}))
           .catch(err => toast.error(err))
}




export const createUserInfo = data => dispatch =>{
    
    // delete data.image
    
    baseURL.put('/accounts/api/user-profile/',data)
            .then(res =>{console.log(res)
                        toast.success('Profile information updated ')
            
            })
            .catch(err => toast.error(err))

    console.log('====================================');
    console.log(data);
    console.log('====================================');
}