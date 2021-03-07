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
export const _addToCart = product => ({
  type: ADD_TO_CART,
  product
})
export const _removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
})
export const _changeProductQuantityInCart = product => ({
  type: CHANGE_QUANTITY,
  product
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
    } catch (error) {
      console.log(error, 'addToCart action failed')
    }
  }
}
export const removeFromCart = (userId, productId) => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/cart/${userId}/${productId}`)
      console.log(data, 'IN THUNK')
      dispatch(_removeFromCart(data))
    } catch (error) {
      console.log(error, 'removeFromCart action failed')
    }
  }
}
export const changeQuantityInCart = (userId, productId, amount) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(
        `/api/cart/${userId}/${productId}/${amount}`
      )
      dispatch(_changeProductQuantityInCart(data))
    } catch (error) {
      console.log(error, 'changeQuantityInCart action failed')
    }
  }
}

// -----Reducer-----
export default function productReducer(state = initialState, action) {
  // NEED TO MAKE SURE THESE ARE RIGHT
  // adding cart is adding a very nested structure
  // when I fix this is going to break Cart component where I get out of nesting
  // make sure all of these work properly

  switch (action.type) {
    case GET_CART:
      return {...state, products: action.products}
    case ADD_TO_CART:
      return {...state, products: action.product}
    case REMOVE_FROM_CART:
      console.log(action.product.productId, 'IN REDUCER')
      return {
        ...state,
        products: state.products.map(product => {
          console.log(product, 'HEROOOOO')
          if (product.productId !== action.product.productId) return product
        })
      }
    case CHANGE_QUANTITY:
      return {...state, products: action.product}
    default:
      return state
  }
}

// return {
//   ...state,
//   products: state.products.filter(
//     product => product.productId !== action.product.productId
//   )
// }
