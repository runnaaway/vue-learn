<template>
  <div>
    <h2>Ama Catalog</h2>
      <div class="catalog-filter">
          <div class="filter__title">Filter:</div>
          <label v-for="item in filter" class="filter__label">
              <input type="checkbox" name="website" :value="item" v-model="searchByWebsite">
              <span>{{item}}</span>
          </label>
          <div class="filter__title">Search: </div>
          <input class="form-control" type="text" v-model="searchByName">
      </div>
    <div class="catalog-list">
      <catalog-entry v-for="item in info" :item="item" :key="item.id"></catalog-entry>
    </div>
  </div>
</template>

<script>
import CatalogEntry from '../common/CatalogEntry.vue'
import { getItems } from '../../misc.js'

export default {
  data() {
    return {
      info: [],
      filter: ['org', 'net', 'info', 'biz', 'io', 'com'],
      all: '',
      searchByName: '',
      searchByWebsite: ''
    }
  },
  mounted() {
    this.fetchItems();
  },
  components: {
    CatalogEntry
  },
  methods: {
    fetchItems() {
      getItems({name: this.searchByName, zone: this.searchByWebsite}).then(items => {
        this.info = items;
      })
    }
  },
  watch: {
    searchByName() {
      this.fetchItems({name});
    },
    searchByWebsite() {
      this.fetchItems({zone});
    },
  },
  computed: {
  }
}
</script>