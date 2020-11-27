<template>
  <div>
    <header>
      <h1 class="is-size-2 has-text-weight-bold">
        Vue Composition Demo
        <loading-spinner :active="usStatesFetching"/>
      </h1>
    </header>
    <main>
      <vue-composition-demo-filter/>
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
      <div>
        <p>{{width}}</p>
        <p>{{height}}</p>
      </div>
    </main>
  </div>
</template>

<script>
// TODO: Demo useWindowResize
import debounce from 'lodash/debounce'
import {
  computed,
  provide,
  reactive,
  toRefs,
  watch
} from '@vue/composition-api'
import usStatesService from '@/services/usStatesService.js'
import VueCompositionDemoFilter from '@/views/VueCompositionDemoFilter.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import useWindowResize from '@/composition/useWindowResize.js'

export default {
  name: 'VueCompositionDemo',
  components: {
    LoadingSpinner,
    VueCompositionDemoFilter
  },
  setup () {
    const state = reactive({
      usStatesFilter: '',
      usStatesFetching: false,
      usStatesMatchingSearch: []
    })

    const hasUsStateMatches = computed(() => state.usStatesMatchingSearch.length > 0)

    const searchForUsStates = async () => {
      state.usStatesFetching = true
      state.usStatesMatchingSearch = await usStatesService.find(state.usStatesFilter)
      state.usStatesFetching = false
    }

    watch(
      () => state.usStatesFilter,
      debounce(
        async () => await searchForUsStates(),
        500
      )
    )

    provide('state', state)

    return {
      ...toRefs(state),
      hasUsStateMatches,
      ...useWindowResize()
    }
  }
}
</script>
