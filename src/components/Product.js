import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.css'

const Product = ({ price, quantity, title, image }) => (
  <div className={styles.product}>
    <img src={image} alt=""/>
    {title} - &#36;{price}{quantity ? ` Remaining ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
