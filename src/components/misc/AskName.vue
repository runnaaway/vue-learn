<template>
  <app-modal>
    <template v-slot:title>Please, enter your name</template>

    <template v-slot="{closeModal}">
      <!-- на самом деле можно избавиться от @keyup если нам не надо сохранения по Enter, и тогда все будет выглядеть аккуратно -->
      <input class="form-control" type="text" v-model="userName" @keyup.enter="updateName(closeModal)">
    </template>

    <template v-slot:confirm>Dats my name</template>
    <template v-slot:dismiss>F*ck off</template>
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
    updateName(closeModal) {
      this.changeName(this.userName);

      closeModal();
    },
    ...mapMutations(['changeName'])
  }
}
</script>
