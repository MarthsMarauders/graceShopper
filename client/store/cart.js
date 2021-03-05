import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'

/**
 * INITIAL STATE
 */
const initialState = {
  products: []
}

/**
 * ACTION CREATORS
 */
export const getCart = products => ({
  type: GET_CART,
  products
})

/**
 * THUNK CREATORS
 */
export const fetchCart = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart/${userId}/mycart`)
      dispatch(getCart(data))
    } catch (error) {
      console.log(error, 'trouble fetching')
    }
  }
}

// export const fetchSingleProduct = id => {
//   return async dispatch => {
//     try {
//       const {data} = await axios.get(`/api/products/${id}`)
//       dispatch(getSingleProduct(data))
//     } catch (error) {
//       console.log(error, 'trouble fetching')
//     }
//   }
// }

// export const createProduct = () => async (dispatch) => {
//   try {
//     await axios.post('/products/createProduct')
//     dispatch(getSingleProducts())
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, products: action.products}
    default:
      return state
  }
}
