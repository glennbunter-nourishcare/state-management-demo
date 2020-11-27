<template>
  <b-field label="US State Search">
    <b-input
      v-model="search"
      :loading="usStatesFetching"
      @focus="$event.target.select()"
      ref="usStatesFilter"
    />
  </b-field>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'VuexDemoFilter',
  computed: {
    ...mapState([
      'usStatesFilter',
      'usStatesFetching'
    ]),
    search: {
      get () {
        return this.usStatesFilter
      },
      set (value) {
        this.setUsStatesFilter(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      setUsStatesFilter: 'usStatesFilter'
    })
  }
}
</script>
