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

    dispatch({type:type.IS_LOADING,payload:true})
    dispatch({type:type.GET_PRODUCTS,payload:[]})
    
    baseURL.get(`/api/products/?page=${n}&page_size=3&ordering=-created_at`)
           .then(res =>{
                    dispatch({type:type.GET_PRODUCTS,payload:res.data.products})
                    dispatch({type:type.GET_PRODUCTS_LENGTH,payload:res.data.count})
                    dispatch({type:type.IS_LOADING,payload:false})        
                })
           .catch(err => toast.error(err))
           .finally(()=> dispatch({type:type.IS_LOADING,payload:false}) ) 
}

//GET REQUEST FOR CATEGORIES
export const getCategories = () => dispatch => {

    baseURL.get('/api/categories/')
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

    dispatch({type:type.IS_LOADING,payload:true})
    dispatch({type:type.GET_PRODUCTS,payload:[]})
    
    baseURL.get(`api/products/?category=${id}`)
           .then(res =>{dispatch({type:type.GET_PRODUCTS_CATEGORIES,payload:res.data.products})
                        dispatch({type:type.IS_LOADING,payload:false})    
        })
           .catch(err => toast.error(err))
           .finally(()=> dispatch({type:type.IS_LOADING,payload:false}))
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

//BASKET PRODUCT REMOVE
export const basketProductRemove = (productID) => dispatch => {
    
    // let data={
    //     product:productID,
    //     count:productCount
    // }
       
        baseURL.delete(`/api/basket/${productID}/`)
        .then(res => console.log(res))

}


//GET REQUEST FOR PRODUCT CATEGORIES
export const createCategories = (data) => dispatch => {

    baseURL.post(`/api/categories/`,data)
            .then(res => {toast.success('Category created');
                          dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
            .catch(err => toast.error(err))
            .finally(() =>  dispatch({type:type.PANEL_OPEN_CLOSE,payload:false}) )
}

//GET REQUEST FOR PRODUCT CATEGORIES
export const createAddProduct = (data) => dispatch => {
    
    console.log(data);

    baseURL.post(`/api/products/`,data)
            .then(res => {toast.success('Product created');
                          dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
            .catch(err => toast.error(err))
            .finally(() =>  dispatch({type:type.PANEL_OPEN_CLOSE,payload:false}) )


}



