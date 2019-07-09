<template>
  <div id="app" class="app">
    <ask-name/>

    <app-header/>

    <div class="container">
      <div class="row">
        <app-menu/>
        <div class="content col-9">
          <router-view/>
        </div>
      </div>
    </div>

    <app-footer/>
  </div>
</template>

<script>
import router from './router'
import store from './store'

import Header from './components/common/Header.vue'
import Menu from './components/common/Menu.vue'
import Footer from './components/common/Footer.vue'
import AskName from './components/misc/AskName.vue'

export default {
  name: 'app',
  store,
  router,
  components: {
    appHeader: Header,
    askName: AskName,
    appMenu: Menu,
    appFooter: Footer,
  }
}
</script>
