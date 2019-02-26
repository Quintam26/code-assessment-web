import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h2 className="store-logo">Acme Store</h2>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
