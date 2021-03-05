import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const GET_ORDER = 'GET_ORDER'

const initState = {
  allOrders: [],
  order: {}
}

const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(getOrders(data))
    } catch (error) {
      console.log(error, 'trouble fetching all orders')
    }
  }
}

const getOrder = order => ({
  type: GET_ORDER,
  order
})

export const fetchOrder = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/${id}`)
      dispatch(getOrder(data))
    } catch (error) {
      console.log(error, 'trouble fetching all orders')
    }
  }
}

// Reducer
export default function orderReducer(state = initState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {...state, allOrders: action.orders}
    case GET_ORDER:
      return {...state, order: action.order}
    default:
      return state
  }
}
