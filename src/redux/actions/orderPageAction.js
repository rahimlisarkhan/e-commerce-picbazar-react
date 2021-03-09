import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"




//GET REQUEST OWN PRODUCT
export const getYourProduct = () => dispatch => {
    dispatch({type:type.IS_LOADING,payload:true})
    baseURL.get('/api/orders/')
            .then((resp) => {dispatch({type:type.GET_ORDER_PRODUCTS,payload:resp.data})
                             dispatch({type:type.IS_LOADING,payload:false})})
            .catch((err) => toast.error(err.message))
            .finally(()=>dispatch({type:type.IS_LOADING,payload:false}))
}