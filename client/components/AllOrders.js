import React from 'react'
import {fetchAllOrders} from '../store/orders'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllOrders extends React.Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    const {orders} = this.props
    return (
      <div className="all-orders-div">
        {orders.map(order => (
          <div key={order.id}>
            <h1>Order#{order.id}</h1>
            {order.products.map(product => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl}></img>
                  <h3>Product Name: {product.name}</h3>
                </Link>
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
