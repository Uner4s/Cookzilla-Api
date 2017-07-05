import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  userId: {
    type: String
  },
  date: {
    type: Date
  },
  content: {
    type: String
  }
})
