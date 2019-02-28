
// import _products from './products.json';

// export default {
//   getProducts: cb => cb(_products),    
//   buyProducts: (payload,cb) => cb()
// }

const URL = 'http://tech.work.co/shopping-cart/products.json'

const fetchData = () => {
  fetch(URL)
    .then(response => response.json())
    .then(items => {
      items.map(product => 
      console.log(product))
    })  
}

export default {
  getProducts: cb => fetchData(URL), 
  buyProducts: (payload, cb) => cb()
}

// export default {
//   getProducts: (cb, timeout) => setTimeout(() => cb(fetchData().then(response => response)), timeout || TIMEOUT),
//   buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
// }
