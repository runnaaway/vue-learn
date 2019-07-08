<template>
  <div id="app" class="app">
    <app-modal></app-modal>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <app-menu></app-menu>
        <div class="content col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import router from './router'
import store from './store'
import Modal from './components/common/Modal.vue'
import Menu from './components/common/Menu.vue'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'app',
  store,
  router,
  components: {
    appModal: Modal,
    appMenu: Menu,
    appFooter: Footer,
    appHeader: Header,
  }
}
</script>