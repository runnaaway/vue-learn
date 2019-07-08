<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Welcome, {{ userNameUpdated }}!</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import {mapState} from 'vuex';

export default {
  //computed: {
  //  updateUserName() {
  //    return this.$store.state.userName
  //  }
  //}
  computed: mapState({
    userName: state => state.userName,
    userNameUpdated: 'userName'
  })
}
</script>