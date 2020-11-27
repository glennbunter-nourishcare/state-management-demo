<template>
  <div>
    <header>
      <h1 class="is-size-2 has-text-weight-bold">
        Vuex Demo
        <loading-spinner :active="usStatesFetching"/>
      </h1>
    </header>
    <main>
      <vuex-demo-filter/>
      <transition-group
        name="fade"
        tag="ul"
        class="list-group"
      >
        <li
          v-for="state in usStatesMatchingSearch"
          :key="state"
          class="list-group-item"
        >
          {{ state }}
        </li>
      </transition-group>
      <p v-show="!hasUsStateMatches && !usStatesFetching">
        No matches found
      </p>
    </main>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'
import debounce from 'lodash/debounce'
import VuexDemoFilter from '@/views/VuexDemoFilter.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

// TODO: Demo mixin?

export default {
  name: 'VuexDemo',
  components: {
    LoadingSpinner,
    VuexDemoFilter
  },
  computed: {
    ...mapState([
      'usStatesMatchingSearch',
      'usStatesFetching',
      'usStatesFilter'
    ]),
    ...mapGetters([
      'hasUsStateMatches'
    ])
  },
  methods: {
    ...mapActions([
      'searchForUsStates'
    ])
  },
  watch: {
    usStatesFilter: debounce(function () {
      this.searchForUsStates()
    }, 500)
  }
}
</script>
