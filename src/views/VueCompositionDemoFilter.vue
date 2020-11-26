<template>
  <b-field label="US State/Territory Search">
    <b-input v-model="state.usStatesFilter"></b-input>
  </b-field>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
  name: 'VueCompositionDemoFilter',
  setup () {
    const state = inject('state')
    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
