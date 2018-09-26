import { mapActions } from 'vuex'
import * as components from 'src/components'
import { ShowImageModal } from 'src/modals'

const STEPS = [
  {
    path: '/api-keys/setup/first',
    step: 1
  },
  {
    path: '/api-keys/setup/second',
    step: 2
  },
  {
    path: '/api-keys/setup/last',
    step: 3
  }
]

export default {
  components,
  data () {
    return {
      STEPS
    }
  }
}
