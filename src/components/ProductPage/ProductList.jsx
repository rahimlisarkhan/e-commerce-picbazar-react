import React, { useState } from "react";
import product from "../../img/product.jpg";
import {IoBasketSharp} from 'react-icons/io5'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

let ProductList = () => {

  const [countShow,setCountShow] = useState(false)
  const [count,setCount] = useState(0)

  return (
    <>
     <div className="product-content__products__card">
        <img src={product} alt="product" />
        <img src={product} className={countShow ? 'addProduct showAdd' : 'addProduct'} alt='product'/>
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>

          {!countShow || count === 0 
           ?<span className="cart" onClick={() => {setCountShow(!countShow)
                                                   setCount(1)}}>
              <IoBasketSharp/>
               Cart
            </span>

           :<span className="cart bg-green">
              <AiOutlineMinus  onClick={() => setCount(prevCount => prevCount <= 0 ? 0 : prevCount - 1)} />
              {count}
              <AiOutlinePlus onClick={() => setCount(nextCount => nextCount + 1)}/>
            </span> }

        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>

      <div className="product-content__products__card">
        <img src={product} alt="product" />
        <h2>lime</h2>
        <span>12 pc(s)</span>
        <div className="basket">
          <span>$1.5</span>
        </div>
      </div>
    </>
  );
};

export default ProductList;
