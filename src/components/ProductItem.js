import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className={styles.productitem}>
  <div>
  <hr/>
    <Product
      image={product.image}
      title={product.title}
      price={product.price}
      quantity={product.inventory} 
    />
    <button className="add"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold out'}
    </button>
    <br/>
    </div>
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
}

export default ProductItem
