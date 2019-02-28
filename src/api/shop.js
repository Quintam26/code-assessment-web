
// import _products from './products.json';

// export default {
//   getProducts: cb => cb(_products),    
//   buyProducts: (payload,cb) => cb()
// }

const URL = 'http://tech.work.co/shopping-cart/products.json'

const fetchData = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => {
      response.map(product => {
      const item = { id: product.id, productTitle: product.productTitle, inventory: product.inventory, value: product.price.value };
      console.log(item)
    })
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
