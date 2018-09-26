import { mapActions } from 'vuex'
import * as components from 'src/components'
import { HelpModal } from 'src/modals'

export default {
  components,
  methods: {
    ...mapActions({
      open: 'modals/open'
    }),
    showHelp () {
      this.open({
        factory: () => HelpModal,
        data: {
          someData
        }
      })
    }
  }
}
