import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, params, {userId}) {
  return Ingredients.find().fetch()
}
