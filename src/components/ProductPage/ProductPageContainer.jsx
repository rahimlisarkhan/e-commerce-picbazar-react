import React, { useEffect } from 'react';
import ProductCarousel from './ProductCarousel';
import ProductContent from './ProductContent';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {getProducts,getCategories,getProductCategories} from '../../redux/actions/productPageActions'
import { ToastContainer } from 'react-toastify';

let ProductPageContainer = (props) => {
    
  console.log(props);
  
    useEffect(() => {props.getProducts()
                     props.getCategories()  }, [])
    return (
        <>
         <ProductCarousel/>
         <ProductContent productPage={props.productPage}
                         getProductCategories={(id)=>props.getProductCategories(id)}   
                         getProduct = {() => props.getProduct()}  
                         auth={props.auth}  
                           />
         <ToastContainer/>
        </>
    );
}


let mapStateToProps = (state) => ({
  productPage:state.productPage,
  auth:state.authentication.auth
})

export default compose(
               connect(mapStateToProps,
               {getProducts,getCategories,getProductCategories}))
               (ProductPageContainer)