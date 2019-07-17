<template>
  <div>
    <h2>Ama Catalog</h2>
      <div class="catalog-filter">
          <div class="filter__title">Filter:</div>
          <label class="filter__label">
              <input type="checkbox" name="website" :value="all">
              <span>All</span>
          </label>
          <label v-for="item in filter" class="filter__label">
              <input type="checkbox" name="website" :value="item">
              <span>{{item}}</span>
          </label>
          <div class="filter__title">Search: </div>
          <input class="form-control" type="text" v-model="searchByName">
      </div>
    <div class="catalog-list">
      <catalog-entry v-for="(item, i) in filteredByName"
                     :key="item.id"
                     :photo="photo(i)"
                     :coords="coords(i)"
                     :img="item.photo"
                     :website="item.website"
                     :name="item.name"
                     :email="item.email"
                     :phone="item.phone"
                     :address="address(i)"
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
      info: [],
      filter: ['org', 'net', 'info', 'biz', 'io', 'com'],
      all: '',
      searchByName: ''
    }
  },
  mounted() {
    Axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.info = response.data
      });
  },
  components: {
    CatalogEntry
  },
  methods: {
    address(index) {
      let address = this.info[index].address.city + ', ' + this.info[index].address.street + ' ' + this.info[index].address.suite;
      return address
    },
    coords(index) {
      let coords = this.info[index].address.geo.lat + ', ' + this.info[index].address.geo.lng;
      return coords
    },
    photo(index) {
      return 'https://picsum.photos/id/' + index + '/200'
    },
  },
  computed: {
    filteredByName: function () {
      return this.info.filter((item) => {
        return item.name.toLowerCase().match(this.searchByName)
      });
    }
  }
}
</script>