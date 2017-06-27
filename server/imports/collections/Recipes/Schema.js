import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  title: {
    type: String
  },
  ingredients: {
    type: Array
  },
  // Declarando un arreglo de objetos
  'ingredients.$': {
    type: Object
  },
  'ingredients.$.ingredientId': {
    type: String
  },
  'ingredients.$.amount': {
    type: Number
  },
  // Declarando un arreglo de objetos
  implements: {
    type: Array
  },
  'implements.$': {
    type: Object
  },
  'implements.$.implementId': {
    type: String
  },
  'implements.$.amount': {
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
  comments: {
    type: Array
  },
  'comments.$': {
    type: Object
  },
  'comments.$.userId': {
    type: String
  },
  'comments.$.content': {
    type: String
  }
})
