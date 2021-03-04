import * as type from "../types"


let initialState ={
    user:null,
    userBasket:null,
    ownProduct:null,
}

export const userInfoReducer = (state=initialState,action) => {

    switch (action.type){

        case type.GET_USER_INFO:
            return {...state, user:action.payload}
            
        case type.GET_USER_BASKET:
            return {...state, userBasket:action.payload}

        case type.GET_OWN_PRODUCTS:
            return {...state,ownProduct:action.payload}

        default:
            return state
    }

}