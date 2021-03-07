import axios from 'axios'
import history from '../history'

// -----Action Types-----
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'

// -----Initial State-----
const initialState = {
  products: []
}

// -----Action Creators-----
export const getCart = products => ({
  type: GET_CART,
  products
})
export const _addToCart = products => ({
  type: ADD_TO_CART,
  products
})
export const _removeFromCart = products => ({
  type: REMOVE_FROM_CART,
  products
})
export const _changeProductQuantityInCart = products => ({
  type: CHANGE_QUANTITY,
  products
})

// -----Thunks-----
export const fetchCart = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart/${userId}/mycart`)
      dispatch(getCart(data))
    } catch (error) {
      console.log(error, 'fetchCart action failed')
    }
  }
}
// "adding" to the cart should be a post route because a row in the association table is being created

export const addToCart = (userId, productId) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/cart/${userId}/${productId}`)
      dispatch(_addToCart(data))
      // history.push('/cart')
    } catch (error) {
      console.log(error, 'addToCart action failed')
    }
  }
}
export const removeFromCart = (userId, productId) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart/${userId}/${productId}`)
      dispatch(_removeFromCart(data))
    } catch (error) {
      console.log(error, 'removeFromCart action failed')
    }
  }
}
export const changeQuantityInCart = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart/${userId}/mycart`)
      dispatch(_changeProductQuantityInCart(data))
    } catch (error) {
      console.log(error, 'changeQuantityInCart action failed')
    }
  }
}

// -----Reducer-----
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, products: action.products}
    case ADD_TO_CART:
      return {...state, products: action.products}
    case REMOVE_FROM_CART:
      return {...state, products: action.products}
    case CHANGE_QUANTITY:
      return {...state, products: action.products}
    default:
      return state
  }
}
