import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"






//GET REQUEST OWN PRODUCT
export const getOwnerProduct = () => dispatch => {
    baseURL.get('/api/own-products/?ordering=-created_at')
            .then((resp) => dispatch({type:type.GET_OWN_PRODUCTS,payload:resp.data}) )
            .catch((err) => toast.error(err.message))
}


//DELETE REQUEST PRODUCT
export const productRemove = (productID) => dispatch => {
    
    console.log(productID);
       
        baseURL.delete(`/api/products/${productID}/`)
               .then(res => {toast.success('Product deleted')
                             dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
                .catch((err) => toast.error(err))
                .finally(()=>dispatch({type:type.PANEL_OPEN_CLOSE,payload:false}))

}