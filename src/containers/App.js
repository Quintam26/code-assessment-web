import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <CartContainer />
    <h2 className="store-logo">Acme Store</h2>
    <hr/>
    <ProductsContainer />
  </div>
)

export default App
