/* eslint-disable no-case-declarations */
import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
  product: {},
  products: []
}

/**
 * ACTION CREATORS
 */
export const getProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})
export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
})
export const updateProduct = product => ({
  type: DELETE_PRODUCT,
  product
})

const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product
})

/**
 * THUNK CREATORS
 */
export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(getProducts(data))
    } catch (error) {
      console.log(error, 'trouble fetching')
    }
  }
}

export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch(getSingleProduct(data))
    } catch (error) {
      console.log(error, 'trouble fetching')
    }
  }
}

export const deleteAProduct = productId => {
  return async dispatch => {
    try {
      const {data: productToDelete} = await axios.delete(
        `/api/products/${productId}`
      )
      console.log('DELETED PRODUCT IN THUNK---->', productToDelete)
      dispatch(deleteProduct(productToDelete))
      history.push('/products')
    } catch (error) {
      console.log('THERE WAS AN ERROR DELETING A PRODUCT', error)
    }
  }
}

export const updateAProduct = product => {
  return async dispatch => {
    try {
      const {data: productToUpdate} = await axios.put(
        `/api/products/${product.id}`,
        product
      )
      dispatch(updateProduct(productToUpdate))
      history.push('/products')
    } catch (error) {
      console.log('THERE WAS AN ERROR UPDATING A PRODUCT', error)
    }
  }
}

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
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, product: action.product}
    case DELETE_PRODUCT:
      const productId = action.product.id
      const newProducts = state.products.filter(
        product => product.id !== productId
      )
      return {...state, products: newProducts}
    case UPDATE_PRODUCT:
      return state.products.map(product =>
        product.id === action.product.id ? action.product : product
      )
    default:
      return state
  }
}
