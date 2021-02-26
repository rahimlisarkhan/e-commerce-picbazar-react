import React from 'react'
import ProductCategory from './ProductCategory';
import ProductList from './ProductList';

 let ProductContent = () => {
    return (
        <div className='product-content'>
              <div className="product-content__category">
              <div className="product-content__category__list">
                <ProductCategory/>
            </div>
              </div>
         

            <div className="product-content__products">
                <ProductList/>
            </div>

            <button className='loadMore' >Load More</button>
        </div>
    )
}


export default ProductContent;