import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import product from './product'
import orders from './orders'
import cart from './cart'

import {useReducer} from 'react'

const reducer = combineReducers({user, product, orders, cart})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'

// -----store-----
// const store = {
//   user:userReducer
//   product:productReducer
// }
