import * as type from "../types"


let initialState ={
    products:null,
    categories:null,
    basket:null
}


export const productPageReducer = (state=initialState,action) => {

    switch (action.type){

        case type.GET_PRODUCTS:
            return {...state, products:action.payload}

        case type.GET_CATEGORIES:
            return {...state, categories:action.payload}
        
        default:
            return state
    }

}