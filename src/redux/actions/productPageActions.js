import * as type from '../types'
import {baseURL} from './baseURL'
import { toast } from "react-toastify"



//GET REQUEST FOR PRODUCTS
export const getProducts = () => dispatch => {

    baseURL.get('/api/products/')
           .then(res =>dispatch({type:type.GET_PRODUCTS,payload:res.data}))
           .catch(err => toast.error(err))
}

//GET REQUEST FOR CATEGORIES
export const getCategories = () => dispatch => {

    baseURL.get('api/categories/')
           .then(res =>dispatch({type:type.GET_CATEGORIES,payload:res.data}))
           .catch(err => toast.error(err))
}

////GET REQUEST FOR PRODUCT CATEGORIES
export const getProductCategories = (id) => dispatch => {

 
    baseURL.get(`api/products/?category=${id}`)
           .then(res =>dispatch({type:type.GET_PRODUCTS,payload:res.data}))
           .catch(err => toast.error(err))
}