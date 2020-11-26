<template>
  <div>
    <header>
      <h1 class="is-size-2 has-text-weight-bold">
        Vue Composition Demo
        <i class="fas fa-spinner fa-spin" v-show="usStatesFetching"></i>
      </h1>
    </header>
    <main>
      <vue-composition-demo-filter/>
      <template v-if="hasUsStateMatches">
        <ul :class="{'list-fetching': usStatesFetching}">
          <li v-for="state in usStatesMatchingSearch" :key="state">
            {{ state }}
          </li>
        </ul>
      </template>
      <template v-else>
        <p>No matches found</p>
      </template>
      <div v-if="false">
        <p>Width: {{ width }}</p>
        <p>Height: {{ height }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { computed, provide, reactive, toRefs, watch } from '@vue/composition-api'
import usStatesService from '@/services/usStatesService.js'
import VueCompositionDemoFilter from '@/views/VueCompositionDemoFilter.vue'
// import useWindowResize from '@/composition/useWindowResize.js'

export default {
  name: 'VueCompositionDemo',
  components: { VueCompositionDemoFilter },
  setup () {
    // const { width, height, stopResizeListener } = useWindowResize()
    const state = reactive({
      usStatesFilter: '',
      usStatesFetching: false,
      usStatesMatchingSearch: []
    })

    const hasUsStateMatches = computed(() => state.usStatesMatchingSearch.length > 0)

    async function searchForUsStates () {
      state.usStatesFetching = true
      state.usStatesMatchingSearch = await usStatesService.find(state.usStatesFilter)
      state.usStatesFetching = false
    }

    watch(() => state.usStatesFilter, debounce(async () => {
      await searchForUsStates()
    }, 500))

    // onBeforeUnmount(() => {
    //   stopResizeListener()
    // })

    provide('state', state)

    return {
      ...toRefs(state),
      hasUsStateMatches
      // width,
      // height
    }
  }
}
</script>

<style scoped>
.list-fetching {
  opacity: .5;
}
</style>
