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
  getAllProducts,
  getUserBasket,
} from "../../redux/actions/productPageActions";
import {orderCheckout , getYourProduct} from '../../redux/actions/orderPageAction'
import { checkToken } from "../../redux/actions/authActions";
import { getUser } from "../../redux/actions/profilePageActions";
import { ToastContainer } from "react-toastify";


let ProductPageContainer = (props) => {

  
  useEffect(() => {

    props.auth && props.checkToken(props.auth);
    props.location.pathname === '/picbazar' && props.getProducts();
    props.getCategories();
    props.auth && props.getYourProduct();   
    props.auth && props.getUser();
    props.auth && props.getUserBasket();
  },[]);




  return (
 
    <>
      <ProductCarousel />
      <ProductContent
        auth={props.auth}
        userBasket={props.userBasket}
        addLoading={props.addLoading}
        productPage={props.productPage}
        closeProductPanel={props.closeProductPanel}
        userProductCount={props.userProductCount}
        basketCall={props.basketCall}
        panelOpenClose={props.panelOpenClose}
        getProductCategories={(id) => props.getProductCategories(id)}
        loadMore = {(n) => props.getProducts(n)}
        getProducts={()=>props.getAllProducts()}
        orderCheckout={(productID, productCount) =>
          props.orderCheckout(productID, productCount)
        }
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
  userProductCount:state.userInfo.userProductCount,
  auth: state.authentication.auth,
  closeProductPanel:state.userInfo.closeProductPanel,
  addLoading:state.productPage.addLoading,
  isLoading:state.productPage.isLoading,
  basketCall:state.userInfo.basketCall,
  panelOpenClose:state.productPage.panelOpenClose,
});

export default compose(
  connect(mapStateToProps, {
    getProducts,
    getCategories,
    getUser,
    getYourProduct,
    getProductCategories,
    basketProductAdd,
    basketProductRemove,
    getUserBasket,
    checkToken,
    getAllProducts,
    orderCheckout,
  })
)(ProductPageContainer);
