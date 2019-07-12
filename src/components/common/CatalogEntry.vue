<template>
  <div class="catalog-entry">
    <div class="entry__photo">
      <img src="http://lorempixel.com/200/200/" alt=""/>
    </div>
    <div class="entry__name">{{name}}</div>
    <div class="entry__email"><a :href="'mailto:' + email"></a></div>
    <div class="entry__phone"><a :href="'tel:' + phone"></a></div>
    <div class="entry__address">{{address}}</div>
    <a :href="'mailto:' + email" class="btn btn-success">Contact</a>
  </div>
</template>

<script>
export default {
  props: ['name', 'email', 'phone', 'address']
}
</script>