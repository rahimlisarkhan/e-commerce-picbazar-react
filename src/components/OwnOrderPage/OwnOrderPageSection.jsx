import React, { useEffect, useState } from "react";
import ProductList from "../ProductPage/ProductList";


let OwnOrderPageSection = (props) => {

  const [ownProduct, setOwnProduct] = useState(null)

  useEffect(()=>{setOwnProduct(props.ownProduct)},[props.ownProduct])
  
  return (
    <div className="owner-container__section">
      {ownProduct &&
        ownProduct.map((el) => (
          <ProductList key={el.id} 
                       location={props.location} 
                      productData={el}
                      productRemove={props.productRemove}
                      getOwnerProduct={props.getOwnerProduct}
                      />
        ))}
        
    </div>
  );
};
export default OwnOrderPageSection;
