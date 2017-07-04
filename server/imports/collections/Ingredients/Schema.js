import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  name: {
    type: String
  },
  state: {
    type: Boolean,
    optional: true
  }
})
