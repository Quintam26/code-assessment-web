import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.css'

const Product = ({ price, quantity, title, image }) => (
  <div className={styles.product}>
    <div>
      <img clasName="image" src={image} alt=""/>
      <p className="info">{title}<br/>{quantity ? ` Remaining ${quantity}` : null}</p>
      <p className="price">&#36;{price}</p>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
