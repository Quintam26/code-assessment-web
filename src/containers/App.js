import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h2 className="acme">Acme Store</h2>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
