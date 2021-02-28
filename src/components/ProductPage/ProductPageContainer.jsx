import React, { useEffect } from 'react';
import ProductCarousel from './ProductCarousel';
import ProductContent from './ProductContent';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {getProducts,getCategories,getProductCategories} from '../../redux/actions/productPageActions'

let ProductPageContainer = (props) => {
    
  
    useEffect(() => {props.getProducts()
                     props.getCategories()  }, [])
    return (
        <>
          <ProductCarousel/>
         <ProductContent productPage={props.productPage}
                         getProductCategories={(id)=>props.getProductCategories(id)}   
                         getProduct = {() => props.getProduct()}  
                           />
        </>
    );
}


let mapStateToProps = (state) => ({productPage:state.productPage})

export default compose(connect(mapStateToProps,{getProducts,getCategories,getProductCategories}))( ProductPageContainer)