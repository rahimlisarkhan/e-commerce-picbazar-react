import {createStore, combineReducers, applyMiddleware} from 'redux'
import { productPageReducer } from './reducers/productPageReducer'
import thunk from 'redux-thunk'


//ALL REDUCERS
const reducers = combineReducers({
    productPage:productPageReducer,
})


//STORE
export const store = createStore(reducers,{},applyMiddleware(thunk))