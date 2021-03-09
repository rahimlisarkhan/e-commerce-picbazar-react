import * as type from "../types"


let initialState ={
    products:[],
    categories:null,
    productsLength:null,
    panelOpenClose:false,
    isLoading:false,
}


export const productPageReducer = (state=initialState,action) => {

    switch (action.type){

        case type.GET_PRODUCTS:
            return {...state, products:[...new Set([...state.products, ...action.payload])]}

        case type.GET_PRODUCTS_CATEGORIES:
            return{...state, products:action.payload}

        case type.GET_CATEGORIES:
            return {...state, categories:action.payload}
        
        case type.ADD_CATEGORIES:
            return {...state, categories:[...state.categories, action.payload]}

        case type.GET_PRODUCTS_LENGTH:
            return{...state, productsLength:action.payload}
        
        case type.PANEL_OPEN_CLOSE:
            return{...state, panelOpenClose:action.payload}    

        case type.IS_LOADING:
            return {...state, isLoading:action.payload}
        
        default:
            return state
    }

}