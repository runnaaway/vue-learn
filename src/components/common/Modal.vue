<template>
  <div class="modal" tabindex="-1" role="dialog" v-show="modalVisibility">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
        </div>
        <div class="modal-body">
          <slot :closeModal="closeModal"></slot>
        </div>
        <div class="modal-footer">
          <button type="button"
                  class="btn btn-warning"
                  v-if="dismissButton"
                  @click="dismiss"
          >{{dismissButton}}</button>
          <button type="button"
                  class="btn btn-primary"
                  v-if="confirmButton"
                  @click="confirm"
          >{{confirmButton}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: {
      type: String
    },
    confirmButton: {
      type: String
    },
    dismissButton: {
      type: String
    }
  },
  data () {
    return {
      modalVisibility: true
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm');
      this.setModalVisibility(false);
    },
    dismiss() {
      this.$emit('dismiss');
      this.setModalVisibility(false);
    },
    closeModal() {
      this.setModalVisibility(false);
    },
    setModalVisibility(value) {
      this.modalVisibility = value
    }
  }
}
</script>
