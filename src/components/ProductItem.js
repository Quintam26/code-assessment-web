import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className={styles.productitem}>
    <div>
      <hr className="hr"/>
      <Product
        image={product.image}
        title={product.title}
        price={product.price}
        quantity={product.inventory} 
        />
      <div className="btn">
        <button className="add"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
        </button>
      </div>
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
