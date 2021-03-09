import axios from 'axios'
import history from '../history'
import path from 'path'

// -----Action Types-----
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
const CHECKOUT = 'CHECKOUT'

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
export const _removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
})
export const _changeProductQuantityInCart = product => ({
  type: CHANGE_QUANTITY,
  product
})
export const _checkout = products => ({
  type: CHECKOUT,
  products
})

// -----Thunks-----
export const fetchCart = userId => {
  return async dispatch => {
    try {
      if (userId) {
        const {data} = await axios.get(`/api/cart/user-cart/${userId}`)
        dispatch(getCart(data))
      }
    } catch (error) {
      console.log(error, 'fetchCart action failed')
    }
  }
}
// "adding" to the cart should be a post route because a row in the association table is being created

export const addToCart = (userId, productId, amount) => {
  return async dispatch => {
    try {
      if (amount > 200) {
        amount = 200
      }
      const {data} = await axios.post(
        `/api/cart/user-cart/${userId}/product/${productId}/amount/${amount}`
      )
      dispatch(_addToCart(data))
    } catch (error) {
      console.log(error, 'addToCart action failed')
    }
  }
}
export const removeFromCart = (userId, productId) => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(
        `/api/cart/user-cart/${userId}/product/${productId}`
      )
      dispatch(_removeFromCart(data))
    } catch (error) {
      console.log(error, 'removeFromCart action failed')
    }
  }
}
export const changeQuantityInCart = (userId, productId, amount) => {
  return async dispatch => {
    try {
      if (amount > 200) {
        amount = 200
      }

      const {data} = await axios.put(
        `/api/cart/user-cart/${userId}/product/${productId}/amount/${amount}`
      )
      dispatch(_changeProductQuantityInCart(data))
    } catch (error) {
      console.log(error, 'changeQuantityInCart action failed')
    }
  }
}
export const checkout = userId => {
  return async dispatch => {
    try {
      const response = await axios.post(`/api/cart/checkout/${userId}`)
      dispatch(_checkout(response))
    } catch (error) {
      console.log(error, 'checkout action failed')
    }
  }
}

// -----Reducer-----
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, products: action.products[0]}
    case ADD_TO_CART:
      return {...state, products: action.products}
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: {
          ...state.products,
          products: [
            ...state.products.products.filter(
              product => product.id !== action.product.productId
            )
          ]
        }
      }
    case CHANGE_QUANTITY:
      return {
        ...state,
        products: {
          ...state.products,
          products: [
            ...state.products.products.map(prod => {
              if (prod.id === action.product.productId) {
                prod['Order-Products'].numberOfItems =
                  action.product.numberOfItems
              }
              return prod
            })
          ]
        }
      }
    case CHECKOUT:
      return {...state, products: action.products}
    default:
      return state
  }
}
