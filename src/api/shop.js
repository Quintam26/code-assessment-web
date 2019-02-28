
// import _products from './products.json';

// const TIMEOUT = 100

// export default {
//   getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
//   buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// }

const URL = 'http://tech.work.co/shopping-cart/products.json'

const fetchData = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => {
      console.log(response[0], 'Products') 
  })
}

export default {
  getProducts: cb => fetchData(URL), 
  buyProducts: (payload,cb) => cb()
}

