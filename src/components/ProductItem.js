import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './ProductItem.css';

const ProductItem = ({ product, onAddToCartClicked, onDeleteFromCartClicked }) => (
  <div className={styles.productitem}>
    <Product
      image={product.image}
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <button className="product-btn"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
    </button>
    <button
      onClick={() => onDeleteFromCartClicked(product.id)}>
      Delete from cart 
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onDeleteFromCartClicked: PropTypes.func.isRequired
}

export default ProductItem
