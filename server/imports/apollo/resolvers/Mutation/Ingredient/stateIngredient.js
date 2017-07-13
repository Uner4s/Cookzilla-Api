import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, {_id, name}, {userId}) {
  Ingredients.update(_id, {$set: {
    state: true
  }})

  const ingredient = Ingredients.findOne(_id)

  return ingredient
}
