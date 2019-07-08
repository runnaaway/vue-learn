<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Welcome, {{ userName }}!</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(["userName"])
  }
}
</script>