<template>
  <div>
    <h2>Ama Catalog</h2>
    <div class="catalog-list">
      <pre style="color: #ffffff;">{{ info }}</pre>
      <!--<catalog-entry></catalog-entry>-->
      <!--<catalog-entry></catalog-entry>-->
      <!--<catalog-entry></catalog-entry>-->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios';
import CatalogEntry from '../common/CatalogEntry.vue'

//Vue.component('catalog-entry', {})

export default {
  data() {
    return {
      info: null
    }
  },
  mounted() {
    Axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response));
  }
}
</script>