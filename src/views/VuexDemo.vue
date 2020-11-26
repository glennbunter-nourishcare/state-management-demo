<template>
  <div>
    <header>
      <h1 class="is-size-2 has-text-weight-bold">
        Vuex Demo
        <i class="fas fa-spinner fa-spin" v-show="usStatesFetching"></i>
      </h1>
    </header>
    <main>
      <b-field label="US State/Territory/Protectorate Search">
        <b-input v-model="search"></b-input>
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
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  name: 'VuexDemo',
  computed: {
    search: {
      get () {
        return this.usStatesFilter
      },
      set (value) {
        this.setUsStatesFilter(value)
      }
    },
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
    ]),
    ...mapMutations({
      setUsStatesFilter: 'usStatesFilter'
    })
  },
  watch: {
    usStatesFilter: debounce(function () {
      this.searchForUsStates()
    }, 500)
  }
}
</script>

<style scoped>
.list-fetching {
  opacity: .5;
}
</style>
