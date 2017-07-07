import SimpleSchema from 'simpl-schema'
// Implements Schema
export default new SimpleSchema({
  name: {
    type: String
  },
  state: {
    type: Boolean,
    optional: true
  }
})
