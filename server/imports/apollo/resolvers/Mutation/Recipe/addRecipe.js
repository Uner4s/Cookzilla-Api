import Recipes from 'server/imports/collections/Recipes'
export default function (root, {recipe}, {userId}) {
  Recipes.insert(recipe)
  console.log(recipe)
}
