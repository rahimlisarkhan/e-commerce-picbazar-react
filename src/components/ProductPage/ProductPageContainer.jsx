import React, { useEffect } from "react";
import ProductCarousel from "./ProductCarousel";
import ProductContent from "./ProductContent";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getProducts,
  getCategories,
  getProductCategories,
  basketProductAdd,
  basketProductRemove,
  getUserBasket,
  getUser,
  checkToken
} from "../../redux/actions/productPageActions";
import { ToastContainer } from "react-toastify";


let ProductPageContainer = (props) => {

  console.log(props);
  useEffect(() => {
    props.location.pathname === '/picbazar' && props.getProducts();
    props.getCategories();
    props.auth && props.checkToken(props.auth);
    props.auth && props.getUser();
    props.auth && props.getUserBasket();
  }, []);

  return (
    <>
      <ProductCarousel />
      <ProductContent
        productPage={props.productPage}
        getProductCategories={(id) => props.getProductCategories(id)}
        getProduct={() => props.getProduct()}
        loadMore = {(n) => props.getProducts(n)}
        auth={props.auth}
        userBasket={props.userBasket}
        basketProductAdd={(productID, productCount) =>
          props.basketProductAdd(productID, productCount)
        }
        basketProductRemove={(productID) =>
          props.basketProductRemove(productID)
        }
        getUserBasket={() => props.getUserBasket()}
      />
      <ToastContainer />
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
