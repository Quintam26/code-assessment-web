import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './Cart.css';

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <i className="fas fa-shopping-cart"> <em>Your cart is empty&nbsp;</em></i>

  )

  return (
    <div className={styles.cart}>
    <div className="cart">
    <main className="cart-case">
    <div className="cart-content">
      {/* <h3>Your Cart</h3> */}
      <div>{nodes}</div>
      <p>Total: &#36;{total}&nbsp;</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
    </main>
    </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
