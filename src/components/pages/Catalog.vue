<template>
  <div>
    <h2>Ama Catalog</h2>
    <div class="catalog-list">
<!--      <pre style="color: #ffffff;">{{ info[0].address }}</pre>-->
      <catalog-entry v-for="(item) in info"
                     :key="item.id"
                     :name="item.name"
                     :email="item.email"
                     :phone="item.phone"
      ></catalog-entry>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import CatalogEntry from '../common/CatalogEntry.vue'

export default {
  data() {
    return {
      info: null
    }
  },
  mounted() {
    Axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response.data));
  },
  components: {
    CatalogEntry
  },
  computed: {

  }
}
</script>