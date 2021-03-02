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
    console.log('====================================');
    console.log(productID,productCount);
    console.log('====================================');
}

//POST BASKET PRODUCT REMOVE
export const basketProductRemove = (productID) => dispatch => {
    // let data={
    //     product:productID,
    //     count:productCount
    // }
    baseURL.delete(`/api/basket/${productID}/`)
    .then(res => console.log(res))
    console.log('====================================');
    console.log(productID,);
    console.log('====================================');
}


//Check token
export const checkToken = token => dispatch => {

    console.log(token);

    baseURL.defaults.headers.common['Authorization'] =`Token ${token}`;
    dispatch({type:type.IS_AUTH, payload:token})

    
    // dispatch({type:type.USER_ID, payload:decode(token).user_id})
} 