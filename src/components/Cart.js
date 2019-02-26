import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './Cart.css';

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
    <i className="fas fa-shopping-cart"> <em>Your cart is empty&nbsp;</em></i>

  )

  return (
    <div className={styles.cart}>
    <div className="cart">
    <main className="cart-content">
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}&nbsp;</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
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
