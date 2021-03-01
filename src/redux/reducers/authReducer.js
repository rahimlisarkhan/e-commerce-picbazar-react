import { GET_LOGIN_PAGE, IS_AUTH } from "../types";


let initialState ={ 
    auth: localStorage.getItem('token'),
    openLoginPage:false
}

export const authenReduser =(state=initialState,action) => {

switch (action.type){

    case IS_AUTH:
        return{...state, auth:action.payload}
    
    case GET_LOGIN_PAGE:
        return{...state, openLoginPage:action.payload}

    default:
        return state;
}
}
