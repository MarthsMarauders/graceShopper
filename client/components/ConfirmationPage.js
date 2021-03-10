import React from 'react'
import {Link} from 'react-router-dom'

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <h1>Thanks for your purchase!</h1>
      <img
        className="confirmation-img"
        src="https://i.pinimg.com/564x/ee/a9/c6/eea9c6878701d9d453480dfc2ec40f5b.jpg"
      />
      <br />
      <br />
      <Link to="/products">
        <button type="button" className="btn btn-success btn-lg">
          Continue Shopping!!!
        </button>
      </Link>
    </div>
  )
}

export default ConfirmationPage
