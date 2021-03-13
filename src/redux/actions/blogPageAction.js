import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"




//GET REQUEST BLOG
export const getBlogs = () => dispatch => {
    dispatch({type:type.IS_LOADING,payload:true})
    baseURL.get('/blogs/')
            .then((resp) => {dispatch({type:type.GET_BLOGS,payload:resp.data})
                             dispatch({type:type.IS_LOADING,payload:false})})
            .catch((err) => toast.error(err.message))
            .finally(()=>dispatch({type:type.IS_LOADING,payload:false}))
}

//POST REQUEST BLOG
export const addBlog = (data) => dispatch => {

    console.log(data);
    dispatch({type:type.IS_LOADING,payload:true})
    baseURL.post('/blogs/',data)
            .then((resp) => {dispatch({type:type.ADD_BLOGS,payload:resp.data})
                             dispatch({type:type.IS_LOADING,payload:false})
                             toast.success('Added blog')})
            .catch((err) => toast.error(err.message))
            .finally(()=>dispatch({type:type.IS_LOADING,payload:false}))
}

