import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Experience from '@/components/Experience'
import Portofolio from '@/components/Portofolio'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'About',
      component: About
    },
    {
      path: '/whatido',
      name: 'WhatIDo',
      component: WhatIDo
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/portofolio',
      name: 'Portofolio',
      component: Portofolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
