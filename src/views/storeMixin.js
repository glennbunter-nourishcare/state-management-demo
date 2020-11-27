import {
  mapActions,
  mapMutations,
  mapGetters,
  mapState
} from 'vuex'

const storeMixin = {
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
    ]),
    ...mapMutations({
      setUsStatesFilter: 'usStatesFilter'
    })
  }
}

export default storeMixin
