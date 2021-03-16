import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";
import { IoBagCheck } from "react-icons/io5";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import ProductBasketLists from "./ProductBasketLists";
import LoadingCard from "../../common/LoadingCard";
import cardimg from '../../img/card2.png'
import translate from "../../lang/translate";

let ProductContent = (props) => {
  
  const [basketListShow, setBasketList] = useState(false),
        [pageCountNext, setPageCount] = useState(1),
        [totalPrice, setTotalPrice] = useState(0),
        [fixcategory, setFixCategory] = useState(false),
        [mobileShow, setMobileShow] = useState(false),
        [mobileShowCategory, setMobileShowCategory] = useState(false),
        [paymentPanel, setPaymentPanel] = useState(false)


  //BOM
  if (window.matchMedia("(min-width: 900px)").matches) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 1050) {
        setFixCategory(true);
        setMobileShowCategory(true);
      } else {
        setFixCategory(false);
      }
    });
  }

  if (window.matchMedia("(max-width: 900px)").matches) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        setFixCategory(true);
        setMobileShowCategory(false);
      } else {
        setFixCategory(false);
      }
    });
  }

  //useEffects
  useEffect(() => {

    let totalPrice = 0;
    props.userBasket &&
      props.userBasket.map(
        (el) =>
          (totalPrice += parseInt(el.count) * parseFloat(el.product.price))
      );
    setTotalPrice(totalPrice < 0 ? 0.0 : totalPrice);
  }, [props.userBasket, props.basketCall]);

  let limitClick = Math.round(props.productPage.productsLength / 10) + 1;

  console.log(limitClick);
  return (
    <div className="product-content">
      <span className="filter" onClick={() => setMobileShow(!mobileShow)}>
        Filter
      </span>

      {/* product lists */}
      {(mobileShowCategory || mobileShow) && (
        <div className="product-content__category ">
          <div
            className={
              fixcategory
                ? "product-content__category__list fix-category"
                : "product-content__category__list "
            }
          >
            <button
              className="categoryClosed"
              onClick={() => setMobileShow(!mobileShow)}
            >
              {" "}
              <AiFillCloseCircle />
            </button>
            <ProductCategory
              categories={props.productPage.categories}
              getProducts={props.getProducts}
              setMobileShow={() => setMobileShow(!mobileShow)}
              getProductCategories={props.getProductCategories}
            />
          </div>
        </div>
      )}

      {/* product categories */}
      <div className="product-content__products">
        {props.productPage.isLoading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          props.productPage.products &&
          props.productPage.products.map((el) => (
            <ProductList
              key={el.id}
              productData={el}
              getProductCategories={props.getProductCategories}
              basketProductAdd={props.basketProductAdd}
              basketProductRemove={props.basketProductRemove}
              getProducts={props.getProducts}
              userBasket={props.userBasket}
              getUserBasket={props.getUserBasket}
              addLoading={props.addLoading}
              basketCall={props.basketCall}
              auth={props.auth}
            />
          ))
        )}
      </div>

      {/* basket   */}
      {props.auth && (
        <div
          className="product-content__baskets"
          onClick={() => setBasketList(!basketListShow)}
        >
          <div className="basket-count">
            <IoBagCheck />
            <span>
              {props.userBasket && props.userBasket.length} {translate("item")}
            </span>
          </div>
          <div className="basket-price">
            $ <span>{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* user orders basket*/}
      <div
        className={
          basketListShow
            ? "product-content__basket-lists basket-list-show"
            : "product-content__basket-lists "
        }
      >
        <div className="lists__count">
          <p>
            <IoBagCheck />
            <span> {props.userBasket && props.userBasket.length} item </span>
          </p>
          <button onClick={() => setBasketList(!basketListShow)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="lists__content">
          {props.userBasket &&
            props.userBasket.map((el) => (
              <ProductBasketLists
                basketProductRemove={props.basketProductRemove}
                basketProductAdd={props.basketProductAdd}
                getUserBasket={props.getUserBasket}
                basketCall={props.basketCall}
                key={el.id}
                basketData={el}
              />
            ))}

          {props.userBasket && props.userBasket.length === 0 && (
            <div className="lists__content__null">
              <div className="null-basket-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="231.91"
                  height="292"
                  viewBox="0 0 231.91 292"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="1"
                      y1="0.439"
                      x2="0.369"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#029477"></stop>
                      <stop offset="1" stop-color="#009e7f"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="no_cart_in_bag_2"
                    data-name="no cart in bag 2"
                    transform="translate(-1388 -351)"
                  >
                    <ellipse
                      id="Ellipse_2873"
                      data-name="Ellipse 2873"
                      cx="115.955"
                      cy="27.366"
                      rx="115.955"
                      ry="27.366"
                      transform="translate(1388 588.268)"
                      fill="#ddd"
                      opacity="0.25"
                    ></ellipse>
                    <path
                      id="Path_18691"
                      data-name="Path 18691"
                      d="M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z"
                      transform="translate(1403 381)"
                      fill="#009e7f"
                    ></path>
                    <path
                      id="Rectangle_1852"
                      data-name="Rectangle 1852"
                      d="M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z"
                      transform="translate(1403 381)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Rectangle_1853"
                      data-name="Rectangle 1853"
                      d="M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z"
                      transform="translate(1403 381)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18685"
                      data-name="Path 18685"
                      d="M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z"
                      transform="translate(1056.69 164.944)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18686"
                      data-name="Path 18686"
                      d="M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z"
                      transform="translate(1057.793 95.684)"
                      fill="#009e7f"
                    ></path>
                    <circle
                      id="Ellipse_2874"
                      data-name="Ellipse 2874"
                      cx="28.689"
                      cy="28.689"
                      r="28.689"
                      transform="translate(1473.823 511.046)"
                      fill="#006854"
                    ></circle>
                    <circle
                      id="Ellipse_2875"
                      data-name="Ellipse 2875"
                      cx="15.046"
                      cy="15.046"
                      r="15.046"
                      transform="translate(1481.401 547.854) rotate(-45)"
                      fill="#009e7f"
                    ></circle>
                    <path
                      id="Path_18687"
                      data-name="Path 18687"
                      d="M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z"
                      transform="translate(1060.579 -35.703)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18688"
                      data-name="Path 18688"
                      d="M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z"
                      transform="translate(1060.566 -35.704)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18689"
                      data-name="Path 18689"
                      d="M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z"
                      transform="translate(970.304 -35.704)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18690"
                      data-name="Path 18690"
                      d="M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z"
                      transform="translate(970.318 -35.703)"
                      fill="#006854"
                    ></path>
                    <path
                      id="Path_18692"
                      data-name="Path 18692"
                      d="M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z"
                      transform="translate(1292.301 101.536)"
                      fill="url(#linear-gradient)"
                    ></path>
                    <path
                      id="Path_18693"
                      data-name="Path 18693"
                      d="M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z"
                      transform="translate(1118.301 101.536)"
                      fill="url(#linear-gradient)"
                    ></path>
                  </g>
                </svg>
              </div>
              <p>No product found</p>
            </div>
          )}
        </div>

        <div
          className="lists__checkout"
          onClick={() => {totalPrice > 0 && setPaymentPanel(!paymentPanel)}}>
          <h2>Checkout</h2>
          <span>$ {totalPrice.toFixed(2)} </span>
        </div>
      </div>




  {/* payments panel */}
  <div className={paymentPanel ? "payments-container payments-show" : "payments-container"} >

<div className="payments-container__content">
    <div className="payments-container__content__img">
        <img src={cardimg} alt="Card"/>
    </div>
    <div className="payments-container__content__group">
    <div className="payments-container__content__group__input">
        <input type="number" placeholder='4578 5745 2123 2545' />
        <input type="number" placeholder='01 / 12'/>
        <input type="number" placeholder='628' />
    </div>
    <div className="payments-container__content__group__btn">
         
       <button onClick={() => setPaymentPanel(!paymentPanel)}> Cancel</button>
       <button  onClick={() => {
            props.userBasket.map((el) => {
              props.orderCheckout(el.product.id, el.count);
              props.basketProductRemove(el.id);
            });
            setPaymentPanel(false)
          }}> Payment</button>

    </div>
    </div>
 
</div>
</div> 




      {/* loadmore */}
      <button
        className="loadMore"
        disabled={limitClick === pageCountNext ? true : false}
        onClick={() => {
          setPageCount((pageCountNext) =>
            pageCountNext < limitClick ? pageCountNext + 1 : limitClick
          );
          props.loadMore(pageCountNext + 1);
        }}
      >
        {limitClick === pageCountNext ? "No Product" : "Load More"}
      </button>
    </div>
  );
};

export default ProductContent;
