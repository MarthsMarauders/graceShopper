import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/product'

/**
 * COMPONENT
 */

class AllProducts extends Component {
  componentDidMount() {
    this.props.getProds()
    // this.forceUpdate();
  }

  render() {
    const {products} = this.props
    console.log('\n --------🚀 \n render \n products', products)
    return products.length ? (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <p> {product.name} </p>
          </div>
        ))}
      </div>
    ) : null
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}
const mapDispatchToProps = dispatch => ({
  getProds: () => {
    dispatch(fetchAllProducts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
