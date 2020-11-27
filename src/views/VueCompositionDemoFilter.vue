<template>
  <b-field label="US State/Territory Search">
    <b-input
      v-model="state.usStatesFilter"
      :loading="state.usStatesFetching"
      @focus="$event.target.select()"
    />
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
