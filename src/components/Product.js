import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.css';

const Product = ({ price, inventory, title, image }) => (
  <div className={styles.product}>
    <div className="product">
    <div className="product-img">
    <img src={image} alt=""/>
    </div>
    <div className="product-content">
    <h2 className="product-price">&#36;{price}</h2>
    <h1 className="product-title">{title}</h1> 
    <h3 className="product-inv">{inventory ? `${inventory}` : null} REMAINING</h3>
    </div>
  </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
