import React, { useEffect, useState } from 'react';
import ProductList from '../ProductPage/ProductList';

let YourOrderPageSection = (props) => {

    
    const [totalAmount, settotalAmount] = useState(0)

    useEffect(() =>{
        let totalAmount = 0
        props.orderProduct && 
        props.orderProduct.map(el=> totalAmount += parseInt(el.count) * parseFloat(el.product.price))

        settotalAmount(totalAmount && totalAmount)
    },[props.orderProduct])

    return (
        <div className="owner-container__section">
            <h1>My order</h1>
            <span className='totalAmount' >Total Amount {totalAmount.toFixed(2)}$</span>
            {props.orderProduct && 
                props.orderProduct.map(el=>
                    <ProductList productData={el.product} data={el} orderRemove={props.orderRemove} getYourProduct={props.getYourProduct} location={props.location}  />
                    )
            }

        </div>
    );
}

export default YourOrderPageSection;