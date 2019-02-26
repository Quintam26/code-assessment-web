/**
 * Mocking client-server processing
 */

const TIMEOUT = 100

const URL = 'http://tech.work.co/shopping-cart/products.json'

const fetchData = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => {
      console.log(response, 'Products') 
  })
}

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(fetchData().then(response => response)), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}
