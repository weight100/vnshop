import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/Components/Hello'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'
import Address from '@/view/Address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'GoodsList',
        component: GoodsList
    },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/address',
        component: Address
      },
      {
        path: '/orderConfirm',
        component: OrderConfirm
      },
      {
        path: '/orderSuccess',
        component: OrderSuccess
      }
    ]
})
