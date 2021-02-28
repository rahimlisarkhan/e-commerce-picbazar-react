import React, { useState } from "react";
import { IoBasketSharp } from "react-icons/io5";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

let ProductList = (props) => {
  const [countShow, setCountShow] = useState(false);
  const [count, setCount] = useState(0);
  const [productPopupOpen, setPopup] = useState(false);

  return (
    <>
      {/* Poduct Card */}
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
        <div className="basket">
          <span>$ {props.productData.price}</span>

          {!countShow || count === 0 ? (
            <span
              className="cart"
              onClick={() => {
                setCountShow(!countShow);
                setCount(1);
              }}
            >
              <IoBasketSharp />
              Cart
            </span>
          ) : (
            <span className="cart bg-green">
              <AiOutlineMinus
                onClick={() =>
                  setCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1))
                }
              />
              {count}
              <AiOutlinePlus
                onClick={() => setCount((nextCount) => nextCount + 1)}
              />
            </span>
          )}
        </div>
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

            <div className="product-info__category">
              <button
                onClick={() =>
                  props.getProductCategories(props.productData.category.id)
                }
              >
                {props.productData.category.title}
              </button>
              <button onClick={() => props.getProducts()}> All food</button>
            </div>

            <div className="product-info__add">
              <span>$ {props.productData.price}</span>
              <span>
                <AiOutlineMinus
                  onClick={() =>
                    setCount((prevCount) =>
                      prevCount <= 0 ? 0 : prevCount - 1
                    )
                  }
                />
                {count}
                <AiOutlinePlus
                  onClick={() => setCount((nextCount) => nextCount + 1)}
                />
              </span>
            </div>
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
