<template>
  <div class="modal" tabindex="-1" role="dialog" v-show="modalVisible">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Please, enter your name</h5>
        </div>
        <div class="modal-body">
          <input class="form-control" type="text" :value="userName" @input="updateName($event.target.value)" @keyup.enter="toggleModal">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" @click="toggleModal">Dats my name</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import { mapState } from 'vuex';


export default {
  data () {
    return {
      modalVisible: true,
    }
  },
  computed: {
    userName() {
      return this.$store.state.userName
    }
  },
  methods: {
    updateName(val) {
      this.$store.commit('changeName', val)
    },
    toggleModal: function() {
      this.modalVisible = !this.modalVisible;
    }
  }
}
</script>