<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Welcome, {{ updateUserName }}!</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
//      userName: ''
    }
  },
  computed: {
    updateUserName() {
      return this.$store.state.userName
    }
  }
}
</script>