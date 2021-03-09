import * as type from "../types"


let initialState ={
    user:null,
    userBasket:null,
    userProductCount:[],
    ownProduct:null,
    orderProduct:null,
    closeProductPanel:false,
}

export const userInfoReducer = (state=initialState,action) => {

    switch (action.type){

        case type.GET_USER_INFO:
            return {...state, user:action.payload}
            
        case type.GET_USER_BASKET:
            return {...state, userBasket:action.payload}

        case type.GET_OWN_PRODUCTS:
            return {...state, ownProduct:action.payload}

        case type.ADD_OWN_PRODUCTS:
            return {...state, ownProduct:[...state.ownProduct, action.payload]}

        case type.ADD_REMOVE_USER_BASKET:
            return {...state, userProductCount:new Set([...state.userProductCount, action.payload])}

        case type.GET_ORDER_PRODUCTS:
            return {...state, orderProduct:action.payload}

        case type.CLOSE_PRODUCT_PANEL:
            return {...state, closeProductPanel:action.payload}

        default:
            return state
    }

}