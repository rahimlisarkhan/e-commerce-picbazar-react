import React from "react";
import ProductList from "../ProductPage/ProductList";


let OwnOrderPageSection = (props) => {

  return (
    <div className="owner-container__section">
      {props.ownProduct &&
        props.ownProduct.map((el) => (
          <ProductList key={el.id} location={props.location} productData={el} />
        ))}
        
    </div>
  );
};
export default OwnOrderPageSection;
