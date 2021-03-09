import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"






//GET REQUEST OWN PRODUCT
export const getOwnerProduct = () => dispatch => {
    dispatch({type:type.IS_LOADING,payload:true})
    baseURL.get('/api/own-products/?ordering=-created_at')
            .then((resp) => {dispatch({type:type.GET_OWN_PRODUCTS,payload:resp.data})
                             dispatch({type:type.IS_LOADING,payload:false})})
            .catch((err) => toast.error(err.message))
            .finally(()=>dispatch({type:type.IS_LOADING,payload:false}))
}


//DELETE REQUEST PRODUCT
export const productRemove = (productID) => dispatch => {
       
        baseURL.delete(`/api/products/${productID}/`)
               .then(res => {
                             toast.success('Product deleted')
                             dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
                .catch((err) => toast.error(err))
                .finally(()=>dispatch({type:type.PANEL_OPEN_CLOSE,payload:false}))

}