import { mapGetters } from 'vuex'
import * as components from 'src/components' //some custom components
import { SomeDataModel } from 'my-core-models'

export default {
  components,
  computed: {
    ...mapGetters({
      someGettersOne: 'some-store-1/some-getters-1', //get function
      someGettersTwo: 'some-store-2/some-getters-2', //get field
      someGettersThree: 'some-store-3/some-getters-3', //get field
    }),
    computedField1 () {
      return this.someGettersOne(params)
    },
    computedField2 () {
      return !this.computedField1
        ? null
        : new SomeDataModel({
          computedField1: this.computedField1,
          otherData: this.someGettersTwo
            ? this.someGettersTwo.extra.data
            : this.someGettersThree.getData()
        })
    }
  }
}
