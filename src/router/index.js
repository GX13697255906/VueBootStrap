import Vue from 'vue'
import Router from 'vue-router'
import begin from '@/components/begin'
import login from '@/components/login'
import discount from '@/components/discount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'begin',
      component: begin,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'discount',
          name: 'discount',
          component: discount
        }
      ]
    }
  ]
})
