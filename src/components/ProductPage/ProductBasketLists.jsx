import React, { useEffect, useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'


 let ProductBasketLists = (props) => {

    const [count,setCount] = useState(null)
    const [closeTab,setCloseTab] = useState(false)

    useEffect(() =>{setCount(props.basketData.count)},[props.basketData])

    return (
        !closeTab && 
        <div className='product-basket-card'  >
            
            <div className="card-count">
            <AiOutlineMinus  onClick={() => {setCount(prevCount => prevCount <= 0 ? 0 : prevCount - 1)
                                             props.basketProductAdd(props.basketData.product.id,count-1)
                                             props.getUserBasket()
                                            }
            } />

            {props.basketData.count}
              <AiOutlinePlus onClick={() => {setCount(nextCount => nextCount + 1)
                                             props.basketProductAdd(props.basketData.product.id,count+1)
                                             props.getUserBasket()
                                            }
            }/>
            </div>

            <img src={props.basketData.product.main_image} alt="product"/>

            <div className="card-desc">
                <h2>{props.basketData.product.title}</h2>
                <p>${props.basketData.product.price}</p>
                <span> {props.basketData.count} x {props.basketData.product.amount_by_unit} 
                                 {props.basketData.product.unit}</span>
            </div>

            <div className="card-price">
                <span>${props.basketData.count * props.basketData.product.price}</span>
            </div>

            <button onClick={()=> {props.basketProductRemove(props.basketData.product.id)
                                    setCloseTab(!closeTab)
            }} >
                <AiOutlineClose/> </button>
        </div>
    )
}

export default ProductBasketLists