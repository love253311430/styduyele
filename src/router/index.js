import Vue from 'vue'
import Router from 'vue-router'
import sell from '@/pages/sell/sell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sell',
      component: sell,
      redirect: '/list',
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/components/sell/list'),
        },
        {
          path: 'review',
          name: 'review',
          component: () => import('@/components/sell/review'),
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('@/components/sell/customer'),
        },
      ]
    }
  ]
})
