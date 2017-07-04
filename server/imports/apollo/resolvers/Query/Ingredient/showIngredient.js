import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, {_id}, {userId}) {
  const ingredient = Ingredients.findOne(_id)

  return ingredient
}
