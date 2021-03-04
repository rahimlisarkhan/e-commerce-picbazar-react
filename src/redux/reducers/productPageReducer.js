import * as type from "../types"


let initialState ={
    products:[],
    categories:null,
    productsLength:null,
}


export const productPageReducer = (state=initialState,action) => {

    switch (action.type){
        // case type.GET_PRODUCTS:
        //     return {...state, products:action.payload}


        case type.GET_PRODUCTS:
            return {...state, products:[...new Set([...state.products, ...action.payload])]}

        case type.GET_CATEGORIES:
            return {...state, categories:action.payload}

        case type.GET_PRODUCTS_LENGTH:
            return{...state, productsLength:action.payload}
        default:
            return state
    }

}