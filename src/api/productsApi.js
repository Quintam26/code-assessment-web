import { get } from './request'
const BASE_URL = 'http://tech.work.co/shopping-cart/products.json';

export function getItems() {
  return get(BASE_URL)
}