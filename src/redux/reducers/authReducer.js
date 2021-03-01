import { IS_AUTH } from "../types";


let initialState ={ auth: localStorage.getItem('token') }

export const authenReduser =(state=initialState,action) => {

switch (action.type){

    case IS_AUTH:
        return{...state, auth:action.payload}
  
    default:
        return state;
}
}
