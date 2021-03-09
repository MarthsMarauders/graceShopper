import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts, deleteAProduct} from '../store/product'
import {Card} from 'react-bootstrap'
import {SingleProduct} from './SingleProduct'
import {Link} from 'react-router-dom'
import {me} from '../store/user'
import {addToCart} from '../store/cart'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    // const {user} = this.props
    this.state = {
      currentPage: 1,
      productsPerPage: 40,
      isAddButtonVisable: this.props.user.isAdmin,
      amount: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  handleChange(event) {
    // if empty/null, dont do this
    if (!isNaN(parseInt(event.target.value))) {
      this.setState({
        amount: event.target.value
      })
    }
  }

  handleDeleteClick(productId) {
    this.props.deleteProduct(productId)
  }

  componentDidMount() {
    this.props.getProds()
  }

  render() {
    const {currentPage, productsPerPage, amount} = this.state
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
    return (
      <div>
        {/* <Cart /> */}
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
            <div className="card" key={product.id}>
              <Card style={{width: '18rem'}} border="primary">
                <Link to={`/products/${product.id}`}>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <h1>{product.name}</h1>
                </Link>
                <Card.Body>
                  <Card.Text>Price: ${product.price / 100}</Card.Text>
                  <Card.Text> Description: {product.description}</Card.Text>
                  <Card.Text>Rating: {stars(product.rating)}</Card.Text>
                  <input
                    type="number"
                    id="number"
                    defaultValue="1"
                    min="0"
                    max="200"
                    name={product.id}
                    onChange={this.handleChange}
                  />
                  <button
                    className="add-to-cart"
                    type="button"
                    onClick={
                      user.id
                        ? () =>
                            this.props.addToCart(user.id, product.id, amount)
                        : () => addToLocalCart(product)
                    }
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
                </Card.Body>
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
  addToCart: (userId, productId, amount) =>
    dispatch(addToCart(userId, productId, amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)

export function addToLocalCart(product) {
  localStorage.setItem(`${product.id}`, JSON.stringify(product))
}

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
