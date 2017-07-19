import SimpleSchema from 'simpl-schema'

// Recipe COLLECTION
export default new SimpleSchema({
  title: {
    type: String
  },
  dificult: {
    type: String
  },
  userId: {
    type: String
  },
  time: {
    type: Number
  },
  gloss: {
    type: String
  },
  state: {
    type: Boolean,
    optional: true
  },
  ingredient: {
    type: Array,
    optional: true
  },
  // Declarando un arreglo de objetos
  'ingredient.$': {
    type: String
  },
  tool: {
    type: Array,
    optional: true
  },
  'tool.$': {
    type: String
  },
  // Declarando un arreglo de objetos
  like: {
    type: Array,
    optional: true
  },
  'like.$': {
    type: Object
  },
  'like.$.userId': {
    type: String
  },
  // Declarando un arreglo de objetos
  comments: {
    type: Array,
    optional: true
  },
  'comments.$': {
    type: String
  }
})
