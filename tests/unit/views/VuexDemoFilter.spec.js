import VuexDemoFilter from '@/views/VuexDemoFilter.vue'
import Vuex from 'vuex'
import {
  createLocalVue,
  mount
} from '@vue/test-utils'
import Buefy from 'buefy'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Buefy)

describe('VuexDemoFilter', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      usStatesFilter: jest.fn()
    }

    store = new Vuex.Store({
      state: {
        usStatesFilter: '',
        usStatesFetching: false
      },
      mutations
    })
  })

  it('should mutate value', () => {
    const wrapper = mount(VuexDemoFilter, {
      localVue,
      store
    })

    // f*** off buefy
    const input = wrapper.find({
      ref: 'usStatesFilter'
    }).find('input')
    input.element.value = 'Cali'
    input.trigger('input')

    expect(mutations.usStatesFilter).toHaveBeenCalledWith(expect.anything(), 'Cali')
  })
})
