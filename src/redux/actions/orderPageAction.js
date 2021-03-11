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

//GET REQUEST OWN PRODUCT
export const orderCheckout = (productID,productCount) => dispatch => {

    let data = {
        product:productID,
        count:productCount
    }

    console.log(data);
    // dispatch({type:type.IS_LOADING,payload:true})
    baseURL.post('/api/orders/',data)
            .then(resp =>console.log(resp))
            // .then((resp) => {dispatch({type:type.GET_ORDER_PRODUCTS,payload:resp.data})
            //                  dispatch({type:type.IS_LOADING,payload:false})})
            // .catch((err) => toast.error(err.message))
            // .finally(()=>dispatch({type:type.IS_LOADING,payload:false}))
}

