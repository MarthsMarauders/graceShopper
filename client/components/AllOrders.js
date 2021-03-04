import React from 'react'
import {fetchAllOrders} from '../store/orders'
import {connect} from 'react-redux'

class AllOrders extends React.Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    console.log(this.props.orders)
    const {orders} = this.props
    return (
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <h1>Order#{order.id}</h1>
            {order.products.map(product => (
              <div key={product.id}>
                <h3>Product Name: {product.name}</h3>
                Price: {product.price}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.allOrders
  }
}

const mapDispatchToProps = dispatch => ({
  getOrders: () => {
    dispatch(fetchAllOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)
