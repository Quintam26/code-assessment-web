import { get } from './request'
const BASE_URL = 'http://tech.work.co/shopping-cart/products.json';

const getUrl = url => {
  const json = window.localStorage.getItem(url);
  if(json) {
    const response = JSON.parse(json);
    return Promise.resolve(response);
  }

  return get(url)
    .then(response => {
      window.localStorage.setItem(url, JSON.stringify(response));
      return response;
    });
};

export default function getItems() {
  return getUrl(BASE_URL)
}