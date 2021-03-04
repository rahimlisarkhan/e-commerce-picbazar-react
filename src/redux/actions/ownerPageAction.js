import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"







export const getOwnerProduct = () => dispatch => {
    baseURL.get('/api/own-products/')
            .then((resp) => dispatch({type:type.GET_OWN_PRODUCTS,payload:resp.data}) )
            .catch((err) => toast.error(err.message))
}