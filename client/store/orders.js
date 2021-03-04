import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

const initState = {
  allOrders: []
}

const getOrder = orders => ({
  type: GET_ORDERS,
  orders
})

export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
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
    default:
      return state
  }
}
