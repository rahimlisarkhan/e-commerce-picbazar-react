import * as type from "../types"


let initialState ={
    user:null,
}


export const userInfoReducer = (state=initialState,action) => {

    switch (action.type){

        case type.GET_USER_INFO:
            return {...state, user:action.payload}

        default:
            return state
    }

}