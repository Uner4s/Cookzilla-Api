import Ingredients from 'server/imports/collections/Ingredients'
export default function ({ingredient}, params, {userId}) {
  return Ingredients.find({_id: {'$in': ingredient}}).fetch()
}
