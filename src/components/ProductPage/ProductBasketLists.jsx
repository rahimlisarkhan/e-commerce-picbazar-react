import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'
import product from "../../img/product.jpg";

 let ProductBasketLists = () => {
    const [count,setCount] = useState(0)
  
    
    return (
        <div className='product-basket-card'  >
            
            <div className="card-count">
            <AiOutlineMinus  onClick={() => setCount(prevCount => prevCount <= 0 ? 0 : prevCount - 1)} />
              {count}
              <AiOutlinePlus onClick={() => setCount(nextCount => nextCount + 1)}/>
            </div>

            <img src={product} alt="product"/>

            <div className="card-desc">
                <h2>Lime</h2>
                <p>$1.5</p>
                <span> {count} x 12pc(s)</span>
            </div>

            <div className="card-price">
                <span>${count*1.5}</span>
            </div>

            <button><AiOutlineClose/> </button>
        </div>
    )
}

export default ProductBasketLists