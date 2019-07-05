import Vue from 'vue'
import Router from 'vue-router'
import begin from '@/components/begin'
import login from '@/components/login'
import discount from '@/components/discount'
import qrDiscount from '@/components/qrDiscount'
import record from '@/components/record'
import timeOutRecord from '@/components/timeOutRecord'


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
        },
        {
          path: 'qrDiscount',
          name: 'qrDiscount',
          component: qrDiscount
        },
        {
          path: 'record',
          name: 'record',
          component: record
        },
        {
          path: 'timeOutRecord',
          name: 'timeOutRecord',
          component: timeOutRecord
        }
      ]
    }
  ]
})
