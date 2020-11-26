import Vue from 'vue'
import Vuex from 'vuex'
import usStatesService from '@/services/usStatesService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    usStatesFilter: '',
    usStatesMatchingSearch: [],
    usStatesFetching: false
  },
  mutations: {
    usStatesFilter (state, usStatesFilter = '') {
      state.usStatesFilter = usStatesFilter
    },
    usStatesMatchingSearch (state, usStatesMatchingSearch = []) {
      state.usStatesMatchingSearch = [...usStatesMatchingSearch]
    },
    usStatesFetching (state, usStatesFetching = false) {
      state.usStatesFetching = usStatesFetching
    }
  },
  actions: {
    async searchForUsStates ({ commit, state }) {
      try {
        commit('usStatesFetching', true)
        const useStatesMatchingSearch = await usStatesService.find(state.usStatesFilter)
        commit('usStatesMatchingSearch', useStatesMatchingSearch)
      } finally {
        commit('usStatesFetching', false)
      }
    }
  },
  getters: {
    hasUsStateMatches (state) {
      return (state.usStatesMatchingSearch || []).length > 0
    }
  }
})
