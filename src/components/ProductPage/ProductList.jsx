import React, { useEffect, useState } from "react";
import { IoBasketSharp } from "react-icons/io5";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiDeleteBin2Line } from "react-icons/ri";

let ProductList = (props) => {
  const [countShow, setCountShow] = useState(false);
  const [count, setCount] = useState(0);
  const [productPopupOpen, setPopup] = useState(false);

console.log(props);

  useEffect(() => {
    var productCount =
        props.productData &&
        props.userBasket &&
        props.userBasket.find((el) => el.product.id === props.productData.id);

    productCount && setCount(productCount.count);
    props.addLoading && setCount(0)
    // props.addLoading &&  props.getUserBasket();
  }, [props.userBasket,props.addLoading]);

  
  return (
    <>
      {/* Product Card */}
      <div className="product-content__products__card">
        <div
          className="overlay-popup"
          onClick={() => setPopup(!productPopupOpen)}
        ></div>
        <img src={props.productData.main_image} alt="product" />
        <img
          src={props.productData.main_image}
          className={countShow ? "addProduct showAdd" : "addProduct"}
          alt="subproduct"
        />
        <h2>{props.productData.title}</h2>
        <span>
          {props.productData.amount_by_unit} {props.productData.unit}
        </span>

        {/* delete btn owner */}
        {props.location === "/picbazar/owner-order" && (
          <button
            className="owner-del-btn"
            onClick={() => {
              props.productRemove(props.productData.id);
              props.getOwnerProduct();
            }}
          >
            
            <RiDeleteBin2Line />
          </button>
        )}

        {/* userbasket */}
        {props.auth && (
          <div className="basket">
            <span>$ {props.productData.price}</span>

            {(countShow || count <= 0) &&
              <span
                className="cart"
                onClick={() => {
                  setCountShow(false);
                  setCount(1);
                  props.basketProductAdd(props.productData.id, 1);
                  props.getUserBasket();
                }}
              >
                <IoBasketSharp />
                Cart
              </span>
              }

              {(count > 0) && 
              <span className="cart bg-green">
                <AiOutlineMinus
                  onClick={() => {
                    setCount((prevCount) =>
                      prevCount <= 0 ? 0 : prevCount - 1
                    );
                    // count === 0 ? props.basketProductRemove(props.productData.id)

                    props.basketProductAdd(props.productData.id, count - 1);
                    props.getUserBasket();
                  }}
                />

                {count}
                <AiOutlinePlus
                  onClick={() => {
                    setCount((nextCount) => nextCount + 1);
                    props.basketProductAdd(props.productData.id, count + 1);
                    props.getUserBasket();
                  }}
                />
              </span>}
          </div>
        )}
      </div>

      {/* Product Popup */}
      <div
        className={
          productPopupOpen
            ? "product-popup-content popup-show"
            : "product-popup-content"
        }
      >
        <div className="product-popup-content__card">
          <div className="product-slider">
            <Carousel className="product-slider__carousel">
              <div>
                <img src={props.productData.main_image} alt="product" />
              </div>
              <div>
                <img src={props.productData.main_image} alt="product" />
              </div>
              <div>
                <img src={props.productData.main_image} alt="product" />
              </div>
            </Carousel>
          </div>

          <div className="product-info">
            <h1>{props.productData.title}</h1>
            <span>
              {props.productData.amount_by_unit} {props.productData.unit}
            </span>

            <p>{props.productData.description}</p>

            {props.location !== "/picbazar/owner-order" && (
              <div className="product-info__category">
                <button
                  onClick={() =>{
                    props.getProductCategories(props.productData.category.id)
                 
                  }}
                >
                  {props.productData.category.title}
                </button>
                <button onClick={() => props.getProducts()}> All food</button>
              </div>
            )}

            {props.auth && (
              <div className="product-info__add">
                <span>$ {props.productData.price}</span>
                
              {(countShow || count <= 0) &&
              <span
                className="cart"
                onClick={() => {
                  setCountShow(false);
                  setCount(1);
                  props.basketProductAdd(props.productData.id, 1);
                  props.getUserBasket();
                }}
              >
                <IoBasketSharp />
                Cart
              </span>
              }


                {count > 0 && 
                <span>
                  <AiOutlineMinus
                    onClick={() => {
                      setCount((prevCount) =>
                        prevCount <= 0 ? 0 : prevCount - 1
                      );
                      // count <= 0 && props.basketProductRemove(props.productData.id)
                      props.basketProductAdd(props.productData.id, count - 1);
                      props.getUserBasket();
                    }}
                  />
                  {count}
                  <AiOutlinePlus
                    onClick={() => {
                      setCount((nextCount) => nextCount + 1);
                      props.basketProductAdd(props.productData.id, count + 1);
                      props.getUserBasket();
                    }}
                  />
                </span>}
              </div>
            )}
          </div>

          <button
            className="popup-close"
            onClick={() => setPopup(!productPopupOpen)}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
