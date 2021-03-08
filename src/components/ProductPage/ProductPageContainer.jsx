import React, { useEffect } from "react";
import ProductCarousel from "./ProductCarousel";
import ProductContent from "./ProductContent";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getProducts,
  getCategories,
  getProductCategories,
  basketProductAdd,
  basketProductRemove,
  getUserBasket,
} from "../../redux/actions/productPageActions";
import { checkToken } from "../../redux/actions/authActions";
import { getUser } from "../../redux/actions/profilePageActions";
import { ToastContainer } from "react-toastify";


let ProductPageContainer = (props) => {

  console.log(props);
  useEffect(() => {
    props.location.pathname === '/picbazar' && props.getProducts();
    props.getCategories();
    props.auth && props.checkToken(props.auth);
    props.auth && props.getUser();
    props.auth && props.getUserBasket();
  },[]);

  return (
    <>
      <ProductCarousel />
      <ProductContent
        productPage={props.productPage}
        getProductCategories={(id) => props.getProductCategories(id)}
        getProduct={() => props.getProduct()}
        loadMore = {(n) => props.getProducts(n)}
        auth={props.auth}
        getProducts={()=>props.getProducts()}
        userBasket={props.userBasket}
        basketProductAdd={(productID, productCount) =>
          props.basketProductAdd(productID, productCount)
        }
        basketProductRemove={(productID) =>
          props.basketProductRemove(productID)
        }
        getUserBasket={() => props.getUserBasket()}
      />
        <ToastContainer
              position="top-right"
              autoClose={5000}
              className='f-size'
      />
    </>
  );
};

let mapStateToProps = (state) => ({
  productPage: state.productPage,
  userBasket: state.userInfo.userBasket,
  auth: state.authentication.auth,
});

export default compose(
  connect(mapStateToProps, {
    getProducts,
    getCategories,
    getUser,
    getProductCategories,
    basketProductAdd,
    basketProductRemove,
    getUserBasket,
    checkToken
    
  })
)(ProductPageContainer);
