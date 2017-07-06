import Recipes from 'server/imports/collections/Recipes'
export default function (root, {recipe}, {userId}) {
  const recipeId = Recipes.insert(recipe)
  return Recipes.findOne(recipeId)
}
