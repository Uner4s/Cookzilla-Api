import SimpleSchema from 'simpl-schema'

// Ingredient Schema
export default new SimpleSchema({
  name: {
    type: String
  },
  state: {
    type: Boolean,
    optional: true
  }
})
