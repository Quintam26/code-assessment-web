import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, onIncreaseQuantityClicked, onDecreaseQuantityClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
        <div>
          <button
            onClick={() => onIncreaseQuantityClicked(product.id)}
          > +
          </button>
          <button
            onClick={() => onDecreaseQuantityClicked(product.id)} 
          > - 
          </button>
        </div>
      </div>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
}

export default Cart
