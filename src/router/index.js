import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Faq from '@/components/Faq'
import Title from '@/components/Title'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/Title',
      name: 'Title',
      component: Title
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
