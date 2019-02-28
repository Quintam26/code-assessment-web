import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './Cart.css'

const Cart  = ({ products, total, image, onCheckoutClicked, onIncreaseQuantityClicked, onDecreaseQuantityClicked, onDeleteFromCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cont">
        <Product
          title={product.title}
          price={product.price}
          key={product.id}
          image={product.image}
        />
        <div className="power">
          <button className="inc"
            onClick={() => onIncreaseQuantityClicked(product.id)}
            disabled={product.inventory > 0 ? '' : 'disabled'}
          ><i className="fas fa-plus"></i>
          </button>
          {product.quantity}
          <button className="dec"
            onClick={() => onDecreaseQuantityClicked(product.id)}
            disabled={product.quantity > 0 ? '' : 'disabled'}
          ><i className="fas fa-minus"></i>
          </button>
          <button className="del"
            onClick={() => onDeleteFromCartClicked(product.id)}>
            REMOVE
        </button>
        </div>
        {/* <hr className="hr"/> */}
      </div>
    )
  ) : (
    
    <p><i className="fas fa-shopping-cart" id="i"> Your cart is empty&nbsp;</i></p>

  )

  return (
    <div className={styles.cart}>
      <div className="cart">
        <main className="cart-content">
          <p className="logo">Shopping<br/>Cart</p>
            <div className="nodes">{nodes}</div>
              {image}
              {/* <p>Total: &#36;{total}&nbsp;</p>
              <button onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}>
                Checkout
              </button> */}
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
