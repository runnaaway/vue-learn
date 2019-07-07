<template>
  <div class="aside-menu col-3">
    <ul class="menu-list">
      <router-link
                  v-for="item in menuItems"
                  :key="item.route"
                  :to="{name: item.route}"
                  tag="li"
                  class="menu-item"
      >
        <a class="menu-lnk">{{ item.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>

import router from '../../router'
export default {
  data () {
    return {
      menuItems: [{
        title: 'Home page',
        route: 'Home'
      }, {
        title: 'Catalog',
        route: 'Catalog'
      }, {
        title: 'About Us',
        route: 'About'
      }, {
        title: 'Contacts',
        route: 'Contacts'
      }, ]
    }
  },
}
</script>