<template>
  <app-modal
      @confirm="onConfirm"
      modalTitle="Please, enter your name"
      confirmButton="Dats my name"
      dismissButton="F*ck off">
    <template v-slot="{closeModal}">
      <!-- на самом деле можно избавиться от @keyup если нам не надо сохранения по Enter, и тогда все будет выглядеть аккуратно -->
      <input class="form-control"
             type="text"
             v-model="userName"
             @keyup.enter="updateName(closeModal)">
    </template>
  </app-modal>
</template>

<script>
import { mapMutations } from 'vuex'

import appModal from '../common/Modal'

export default {
  data() {
    return {
      userName: ''
    }
  },
  components: {
    appModal
  },
  methods: {
    onConfirm(){
      this.changeName(this.userName);
    },
    updateName(closeModal) {
      this.changeName(this.userName);

      closeModal();
    },
    ...mapMutations(['changeName'])
  }
}
</script>
