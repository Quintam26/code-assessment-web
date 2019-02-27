import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.css'

const ProductsList = ({ title, children }) => (
  <div className={styles.productlist}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
