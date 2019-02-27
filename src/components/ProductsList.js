import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.css'

const ProductsList = ({ children }) => (
  <div className={styles.productlist}>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList
