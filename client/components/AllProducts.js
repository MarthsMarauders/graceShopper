import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts, deleteAProduct} from '../store/product'
import {Card} from 'react-bootstrap'
import {SingleProduct} from './SingleProduct'
import {Link} from 'react-router-dom'
import Cart from './Cart'
import {me} from '../store/user'

import {addToCart} from '../store/cart'
/**
 * COMPONENT
 */

class AllProducts extends Component {
  constructor(props) {
    super(props)
    console.log('USER STATE----->', this.props)
    // const {user} = this.props
    this.state = {
      currentPage: 1,
      productsPerPage: 40,
      isAddButtonVisable: this.props.user.isAdmin
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }
  handleDeleteClick(productId) {
    this.props.deleteProduct(productId)
  }

  componentDidMount() {
    this.props.getProds()
  }

  // componentDidUpdate(prevProps) {
  //   // console.log(
  //   //   ' componentDidUpdate \n\n',
  //   //   prevProps.user.id,
  //   //   this.props.user.id
  //   // )
  //   if (this.props.user.id !== prevProps.user.id) {
  //     this.props.fetchUser(this.props.user.id)
  //   }
  // }

  // refreshPage() {
  //   window.location.reload()
  // }
  render() {
    console.log('USER IS ADMIN---->', this.props.user.isAdmin)
    const {currentPage, productsPerPage} = this.state
    const {products, user} = this.props
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    )

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div key={number} className="numbers">
          <div id={number} className="number" onClick={this.handleClick}>
            {number}
          </div>
        </div>
      )
    })
    // function printMe() {
    //   console.log('THIS WAS CLICKED ')
    // }

    return (
      <div>
        <Cart />
        <Link to="/products/create">
          <button
            type="button"
            className={
              this.state.isAddButtonVisable
                ? 'product-button-visable'
                : 'product-button-invisable'
            }
          >
            ADD NEW PRODUCT
          </button>
        </Link>
        <div className="pages">
          <div id="page-numbers">Pages</div>
          <div id="page-numbers">{renderPageNumbers}</div>
        </div>
        <div className="products-div">
          {currentProducts.map(product => (
            <div key={product.id}>
              <Card id="card" style={{width: '18rem'}} border="primary">
                <Link to={`/products/${product.id}`}>
                  <Card.Img
                    id="prod-img"
                    variant="top"
                    src={product.imageUrl}
                  />
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Body>
                  <Card.Text>${product.price / 100}</Card.Text>
                  <Card.Text> Description: {product.description}</Card.Text>
                </Card.Body>
                <div>Rating: {stars(product.rating)}</div>

                <button
                  className="add-to-cart"
                  type="button"
                  onClick={() => this.props.addToCart(user.id, product.id)}
                >
                  Add to Cart
                </button>
                <Link to={`/products/${product.id}/edit`}>
                  <button
                    type="button"
                    className={
                      this.state.isAddButtonVisable
                        ? 'product-button-visable'
                        : 'product-button-invisable'
                    }
                  >
                    EDIT PRODUCT DETAILS
                  </button>
                </Link>
                <button
                  onClick={() => this.handleDeleteClick(product.id)}
                  type="button"
                  className={
                    this.state.isAddButtonVisable
                      ? 'product-button-visable'
                      : 'product-button-invisable'
                  }
                >
                  DELETE
                </button>
              </Card>
            </div>
          ))}
        </div>
        <div className="pages">
          <div id="page-numbers">Pages</div>
          <div id="page-numbers">{renderPageNumbers}</div>
        </div>
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    ...state,
    products: state.product.products
    // user: state.user.isAdmin
  }
}
const mapDispatchToProps = dispatch => ({
  getProds: () => dispatch(fetchAllProducts()),
  deleteProduct: productId => dispatch(deleteAProduct(productId)),
  fetchUser: () => dispatch(me()),
  addToCart: (userId, productId) => dispatch(addToCart(userId, productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)

export function stars(rating) {
  let html
  if (rating === -1) {
    html = (
      <div>
        <p>No Ratings Yet!</p>
      </div>
    )
  }
  if (rating === 1) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 2) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 3) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 4) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span id="unchecked" className="fa fa-star"></span>
      </div>
    )
  }
  if (rating === 5) {
    html = (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    )
  }
  return html
}
/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }

// <div key={product.id}>
//   <img src={product.imageUrl}></img>
//   <p> Name: {product.name} </p>
//   <p> Price: ${product.price} </p>
//   <p> rating: {product.rating} </p>
// </div>
