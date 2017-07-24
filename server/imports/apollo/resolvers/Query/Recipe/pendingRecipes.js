import Recipes from 'server/imports/collections/Recipes'
export default function (root, params, {userId}) {
  const recipes = Recipes.find({ state: { $exists: false } }).fetch()
  return recipes
}
