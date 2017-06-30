import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  title: {
    type: String
  },
  ingredient: {
    type: Array
  },
  dificult: {
    type: Number
  },
  time: {
    type: Number
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
  implements: {
    type: Array
  },
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
  votes: {
    type: Array
  },
  'votes.$': {
    type: Object
  },
  'votes.$.userId': {
    type: String
  },
  'votes.$.score': {
    type: Number
  },
  // Declarando un arreglo de objetos
  comment: {
    type: Array
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
