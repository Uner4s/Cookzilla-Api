import SimpleSchema from 'simpl-schema'

// Comments Schema
export default new SimpleSchema({
  userId: {
    type: String
  },
  recipeId: {
    type: String
  },
  date: {
    type: Date,
    optional: true
  },
  content: {
    type: String
  }
})
