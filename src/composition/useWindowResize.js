import { reactive, toRefs } from '@vue/composition-api'

export default function useWindowResize () {
  const state = reactive({
    width: window.innerWidth,
    height: window.innerHeight
  })

  function resizeHandler (e) {
    state.width = e.target.innerWidth
    state.height = e.target.innerHeight
  }

  function stopResizeListener () {
    console.log('I stopped listening...')
    window.removeEventListener('resize', resizeHandler)
  }

  window.addEventListener('resize', resizeHandler)

  return {
    ...toRefs(state),
    stopResizeListener
  }
}
