<template>
  <div class="is-flex is-justify-content-space-between mt-6">
    <b-button
      tag="router-link"
      type="is-primary"
      size="is-large"
      :to="{name: 'VuexDemo'}"
    >Vuex Demo
    </b-button>

    <b-button
      tag="router-link"
      type="is-primary"
      size="is-large"
      :to="{name: 'VueCompositionDemo'}"
    >Vue Composition Demo
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
