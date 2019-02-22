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
    <p className="product-price">&#36;{price}</p>
    <div className="t-inv">
    <p className="product-title">{title}</p> 
    <p className="product-inv">{inventory ? `${inventory}` : null} REMAINING</p>
    </div>
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
