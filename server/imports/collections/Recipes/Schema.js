import SimpleSchema from 'simpl-schema'

// Recipe COLLECTION
export default new SimpleSchema({
  title: {
    type: String
  },
  ingredient: {
    type: Array,
    optional: true
  },
  implement: {
    type: Array,
    optional: true
  },
  dificult: {
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
  // Declarando un arreglo de objetos
  'ingredient.$': {
    type: Object
  },
  'ingredient.$.ingredientId': {
    type: String
  },
  // Declarando un arreglo de objetos
  'implement.$': {
    type: Object
  },
  'implement.$.implementId': {
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
