<template>
  <div class="modal" tabindex="-1" role="dialog" v-show="modalVisibility">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><slot name="title"></slot></h5>
        </div>
        <div class="modal-body">
          <slot :closeModal="closeModal"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" v-if="dismissButton" @click="dismiss"><slot name="dismiss"></slot></button>
          <button type="button" class="btn btn-primary" @click="confirm"><slot name="confirm"></slot></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dismissButton: {
      type: Boolean,
      default: () => true
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
