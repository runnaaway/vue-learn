<template>
  <div class="modal" tabindex="-1" role="dialog"  v-if="modalVisible">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Please, enter your name</h5>
        </div>
        <div class="modal-body">
          <input class="form-control" type="text" v-model="userNameVal">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"  data-dismiss="modal" data-toggle="modal" @click="toggleModal">Dats my name</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  data () {
    return {
      modalVisible: true,
      userNameVal: ''
    }
  },
  methods: {
    toggleModal: function() {
      this.modalVisible = !this.modalVisible;
      this.$store.state.userName = this.userNameVal
    }
  }
}
</script>