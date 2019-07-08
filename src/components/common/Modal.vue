<template>
  <div class="modal" tabindex="-1" role="dialog" v-show="modalVisible">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Please, enter your name</h5>
        </div>
        <div class="modal-body">
          <input class="form-control" type="text" v-model="userName" @keyup.enter="updateName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="toggleModal">Dats my name</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data () {
    return {
      userName: '',
      modalVisible: true
    }
  },
  methods: {
    updateName() {
      this.changeName(this.userName);
      this.toggleModal();
    },
    toggleModal: function() {
      this.modalVisible = !this.modalVisible;
    },
    ...mapMutations(['changeName'])
  }
}
</script>