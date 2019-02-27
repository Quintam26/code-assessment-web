import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, image }) => (
  <div>
    {/* <img src={image} alt=""/> */}
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
