import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, image, onCheckoutClicked, onIncreaseQuantityClicked, onDecreaseQuantityClicked, onDeleteFromCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          image={product.image}
        />
        <div>
          <button
            onClick={() => onIncreaseQuantityClicked(product.id)}
          ><i className="fas fa-plus"></i>
          </button>
          <button
            onClick={() => onDecreaseQuantityClicked(product.id)} 
          ><i className="fas fa-minus"></i>
          </button>
          <button
            onClick={() => onDeleteFromCartClicked(product.id)}>
            Delete from cart
          </button>
        </div>
      </div>
    )
  ) : (
    <i className="fas fa-shopping-cart"> <em>Your cart is empty&nbsp;</em></i>

  )

  return (
    <div>
    <div className="cart">
    <main className="cart-content">
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      {image}  
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
