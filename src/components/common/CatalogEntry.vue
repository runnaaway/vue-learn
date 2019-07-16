<template>
  <div class="catalog-entry">
    <div class="entry__photo">
      <img :src="photo" alt=""/>
    </div>
    <div class="entry__name">{{name}}</div>
    <div class="entry__phone">Phone: <a :href="'tel:' + phone">{{phone}}</a></div>
    <div class="entry__phone">Website: <a :href="'http://' + website">{{website}}</a></div>
    <div class="entry__address">Address: {{address}}</div>
    <div class="flex justify-content-between">
      <a href="#" :data-coords="coords" class="btn btn-sm btn-primary">View map</a>
      <a :href="'mailto:' + email" class="btn btn-sm btn-success">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['coords', 'photo', 'name', 'email', 'phone', 'website', 'address']
}
</script>