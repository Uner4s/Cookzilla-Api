import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, params, {userId}) {
  const ingredientId = Ingredients.insert(params)
  return Ingredients.findOne(ingredientId)
}
