<template>
  <div>
    <header>
      <h1 class="is-size-2 has-text-weight-bold">
        Vue Composition Demo
        <i class="fas fa-spinner fa-spin" v-show="usStatesFetching"></i>
      </h1>
    </header>
    <main>
      <b-field label="US State/Territory Search">
        <b-input v-model="usStatesFilter"></b-input>
      </b-field>
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
    </main>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { computed, reactive, toRefs, watch } from '@vue/composition-api'
import usStatesService from '@/services/usStatesService.js'

export default {
  name: 'VueCompositionDemo',
  setup () {
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

    return {
      ...toRefs(state),
      hasUsStateMatches
    }
  }
}
</script>

<style scoped>
.list-fetching {
  opacity: .5;
}
</style>
