import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, params, {userId}) {
  const ingredients = Ingredients.find({ state: { $exists: false } }).fetch()
  return ingredients
}
