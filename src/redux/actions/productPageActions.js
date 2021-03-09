import * as type from '../types'
import {baseURL} from './baseURL'
import { toast } from "react-toastify"






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
    .then(res => {console.log(res)
                  dispatch({type:type.ADD_REMOVE_USER_BASKET,payload:res.data})

    })
}

//BASKET PRODUCT REMOVE
export const basketProductRemove = (productID) => dispatch => {
    
    console.log(productID);
       
       
        baseURL.delete(`/api/basket/${productID}/`)
        .then(res =>{ console.log(res)
            dispatch({type:type.CLOSE_PRODUCT_PANEL,payload:true})
        })
        .finally(()=>dispatch({type:type.CLOSE_PRODUCT_PANEL,payload:false}))

}


//GET REQUEST FOR PRODUCT CATEGORIES
export const createCategories = (data) => dispatch => {

    dispatch({type:type.PANEL_OPEN_CLOSE,payload:false})
    baseURL.post(`/api/categories/`,data)
            .then(res => {toast.success('Category created');
                          console.log(res.data);
                          dispatch({type:type.ADD_CATEGORIES,payload:res.data})
                          dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
            .catch(err => toast.error(err))
}

//POST REQUEST ADD PRODUCT 
export const createAddProduct = (data) => dispatch => {
    
    console.log(data);


    baseURL.post(`/api/products/`,data)
            .then(res => {
                          console.log(res);
                          toast.success('Product created');
                          dispatch({type:type.ADD_OWN_PRODUCTS,payload:res.data})
                          dispatch({type:type.PANEL_OPEN_CLOSE,payload:true})})
            .catch(err => toast.error(err))
            .finally(() =>  dispatch({type:type.PANEL_OPEN_CLOSE,payload:false}))
}
