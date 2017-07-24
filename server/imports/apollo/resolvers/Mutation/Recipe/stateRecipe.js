import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id}, {userId}) {
  Recipes.update(_id, {$set: {
    state: true
  }})
  const recipe = Recipes.findOne(_id)
  return recipe
}
