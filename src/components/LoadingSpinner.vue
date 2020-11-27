<template>
  <i
    class="fas fa-circle-notch fa-spin"
    style="opacity: .2"
    v-show="active"
  ></i>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>
