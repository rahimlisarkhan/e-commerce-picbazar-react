import * as type from "../types";


let initialState ={ 
    auth: localStorage.getItem('token'),
    openLoginPage:false
}

export const authenReduser =(state=initialState,action) => {

switch (action.type){

    case type.IS_AUTH:
        return{...state, auth:action.payload}
    
    case type.GET_LOGIN_PAGE:
        return{...state, openLoginPage:action.payload}

    default:
        return state;
}
}
