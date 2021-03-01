import {createStore, combineReducers, applyMiddleware} from 'redux'
import { productPageReducer } from './reducers/productPageReducer'
import thunk from 'redux-thunk'
import { authenReduser } from './reducers/authReducer'


//ALL REDUCERS
const reducers = combineReducers({
    productPage:productPageReducer,
    authentication:authenReduser
})

//STORE
export const store = createStore(reducers,{},applyMiddleware(thunk))