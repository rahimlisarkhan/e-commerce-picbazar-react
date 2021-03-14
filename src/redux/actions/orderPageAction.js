import { toast } from "react-toastify";
import * as type from "../types";
import { baseURL } from "./baseURL";

//GET REQUEST OWN PRODUCT
export const getYourProduct = () => (dispatch) => {
  dispatch({ type: type.IS_LOADING, payload: true });
  baseURL
    .get("/api/orders/")
    .then((resp) => {
      dispatch({ type: type.GET_ORDER_PRODUCTS, payload: resp.data });
      dispatch({ type: type.IS_LOADING, payload: false });
    })
    .catch((err) => toast.error(err.message))
    .finally(() => dispatch({ type: type.IS_LOADING, payload: false }));
};

//GET REQUEST OWN PRODUCT
export const orderCheckout = (productID, productCount) => (dispatch) => {
  dispatch({ type: type.BASKET_CALL, payload: null });

  let data = {
    product: productID,
    count: productCount,
  };

  // dispatch({type:type.IS_LOADING,payload:true})
  baseURL
    .post("/api/orders/", data)
    .then((resp) => {
      dispatch({ type: type.GET_ORDER_PRODUCTS, payload: resp.data });
      dispatch({ type: type.BASKET_CALL, payload: true });
      dispatch({ type: type.IS_LOADING, payload: false });
      toast.success('Order accepted')
    })
    .catch((err) => toast.error(err.message))
    .finally(() => dispatch({ type: type.IS_LOADING, payload: false }));
};

//BASKET PRODUCT REMOVE
export const orderRemove = (productID) => (dispatch) => {
  dispatch({ type: type.ADD_LOADING, payload: false });
  baseURL.delete(`/api/orders/${productID}/`).then((res) => {
    console.log(res);
    dispatch({ type: type.ADD_LOADING, payload: true });
  });
};
