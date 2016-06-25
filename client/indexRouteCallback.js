import {store} from './stores/miniShopStore';
import {fetchProducts} from './actions/index';

export function onIndexEnter() {

  store.dispatch(fetchProducts());
}