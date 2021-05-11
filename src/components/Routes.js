import Cart from './CartPage/Cart/Cart'
import ProductListPage from './ProductListPage/ProductListPage'
import SingleProductPage from './SingleProductPage/SingleProductPage'

export const routes = [{
    id:1,
    path: '/',
    component: ProductListPage,
    name: 'main',
    excludeFromNav: true
},{
    id:2,
    path: '/products',
    component: ProductListPage,
    name: 'Products'
}, {
    id:3,
    path: '/product',
    component: SingleProductPage,
    name: 'SingleProductPage',
    excludeFromNav: true

}, {
    id:4,
    path: '/Cart',
    component: Cart,
    name: 'Cart'
},];