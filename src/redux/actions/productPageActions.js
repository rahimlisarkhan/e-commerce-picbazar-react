import * as type from '../types'
import {baseURL} from './baseURL'
import { toast } from "react-toastify"




export const getUser = () => dispatch => {

    baseURL.get('/accounts/api/user-profile/')
           .then(res =>dispatch({type:type.GET_USER_INFO,payload:res.data}))
           .catch(err => toast.error(err))
}


//GET REQUEST FOR PRODUCTS
export const getProducts = (n=1) => dispatch => {

    baseURL.get(`/api/products/?page=${n}&page_size=3`)
           .then(res =>{
                    dispatch({type:type.GET_PRODUCTS,payload:res.data.products})
                    dispatch({type:type.GET_PRODUCTS_LENGTH,payload:res.data.count})        
                })
           .catch(err => toast.error(err))
}

//GET REQUEST FOR CATEGORIES
export const getCategories = () => dispatch => {

    baseURL.get('api/categories/')
           .then(res =>dispatch({type:type.GET_CATEGORIES,payload:res.data}))
           .catch(err => toast.error(err))
}


//GET REQUEST FOR USER PRODUCTS BASKET
export const getUserBasket = () => dispatch => {

 
    baseURL.get(`api/basket/`)
           .then(res =>dispatch({type:type.GET_USER_BASKET,payload:res.data}))
           .catch(err => toast.error(err))
}


////GET REQUEST FOR PRODUCT CATEGORIES
export const getProductCategories = (id) => dispatch => {

 
    baseURL.get(`api/products/?category=${id}`)
           .then(res =>dispatch({type:type.GET_PRODUCTS,payload:res.data}))
           .catch(err => toast.error(err))
}



//POST BASKET PRODUCT ADD REMOVE COUNT
export const basketProductAdd = (productID,productCount) => dispatch => {
    let data={
        product:productID,
        count:productCount
    }
    baseURL.post('/api/basket/',data)
    .then(res => console.log(res))
}

//POST BASKET PRODUCT REMOVE
export const basketProductRemove = (productID) => dispatch => {
    // let data={
    //     product:productID,
    //     count:productCount
    // }
       
        baseURL.delete(`/api/basket/${productID}/`)
        .then(res => console.log(res))


}


//Check token
export const checkToken = token => dispatch => {

    baseURL.defaults.headers.common['Authorization'] =`Token ${token}`;
    dispatch({type:type.IS_AUTH, payload:token})

    
} 