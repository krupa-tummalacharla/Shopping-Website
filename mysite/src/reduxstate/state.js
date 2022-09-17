import {configureStore} from '@reduxjs/toolkit'
import allProducts from './reducers/allProducts'
import getCartReducer from './reducers/getCartReducer'
import jeweleryProducts from './reducers/jeweleryProducts'
import loginReducer from './reducers/loginReducer'
import menProducts from './reducers/menProducts'
import womenProducts from './reducers/womenProducts'


export const store = configureStore({
    reducer:{
        jeweleryProd:jeweleryProducts,
        menCloth:menProducts,
        womenCloth:womenProducts,
        allProd:allProducts,
        login:loginReducer,
        getCart:getCartReducer
    }
})