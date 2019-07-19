<template>
  <div class="catalog-entry">
    <div class="entry__photo">
      <img :src="photo" alt=""/>
    </div>
    <div class="entry__name">{{item.name}}</div>
    <div class="entry__phone">Phone: <a :href="'tel:' + item.phone">{{item.phone}}</a></div>
    <div class="entry__phone">Website: <a :href="'http://' + item.website">{{item.website}}</a></div>
    <div class="entry__address">Address: {{address}}</div>
    <div class="flex justify-content-between">
      <a href="#" :data-coords="coords" class="btn btn-sm btn-primary">View map</a>
      <a :href="'mailto:' + item.email" class="btn btn-sm btn-success">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    address() {
      return this.item.address.city + ', ' + this.item.address.street + ' ' + this.item.address.suite;
    },
    coords() {
      return this.item.address.geo.lat + ', ' + this.item.address.geo.lng;
    },
    photo() {
      return 'https://picsum.photos/id/' + this.item.id + '/200'
    },
  }

}
</script>