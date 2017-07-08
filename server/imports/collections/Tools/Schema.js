import SimpleSchema from 'simpl-schema'
// Tools Schema
export default new SimpleSchema({
  name: {
    type: String
  },
  state: {
    type: Boolean,
    optional: true
  }
})
