import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './components/pages/Home.vue'
import Catalog from './components/pages/Catalog.vue'
import About from './components/pages/About.vue'
import Contacts from './components/pages/Contacts.vue'

export default new Router({
  mode: 'history',
  base: 'localhost:8080',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }]
})