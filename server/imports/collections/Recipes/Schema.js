import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  title: {
    type: String
  },
  ingredient: {
    type: Array
  },
  implement: {
    type: Array
  },
  dificult: {
    type: String
  },
  time: {
    type: Number
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
  'ingredient.$.amount': {
    type: Number
  },
  // Declarando un arreglo de objetos
  'implement.$': {
    type: Object
  },
  'implement.$.implementId': {
    type: String
  },
  'implement.$.amount': {
    type: Number
  },
  // Declarando un arreglo de objetos

  vote: {
    type: Array,
    optional: true
  },
  'vote.$': {
    type: Object
  },
  'vote.$.userId': {
    type: String
  },
  'vote.$.score': {
    type: Number
  },
  // Declarando un arreglo de objetos
  comment: {
    type: Array,
    optional: true
  },
  'comment.$': {
    type: Object
  },
  'comment.$.userId': {
    type: String
  },
  'comment.$.content': {
    type: String
  }
})
