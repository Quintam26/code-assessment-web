import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.css';

const Product = ({ price, inventory, title, image }) => (
  <div className={styles.product}>
    <img src={image} alt=""/>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
