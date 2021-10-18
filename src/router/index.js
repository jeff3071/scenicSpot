import Vue from 'vue'
import Router from 'vue-router'
import scenicSpot from '@/components/scenicSpot'
import index from '@/components/index'
import myspot from '@/components/myspot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scenicSpot/:id?',
      name: 'scenicSpot',
      component: scenicSpot
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/myspot',
      name: 'myspot',
      component: myspot
    }
  ]
})
