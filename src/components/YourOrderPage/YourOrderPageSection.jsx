import React from 'react';
import ProductList from '../ProductPage/ProductList';

let YourOrderPageSection = (props) => {
    return (
        <div className="owner-container__section">
            <h1>My order</h1>
            
            {props.orderProduct && 
                props.orderProduct.map(el=>
                    <ProductList productData={el.product}  />
                    )
            }

        </div>
    );
}

export default YourOrderPageSection;