import Recipes from 'server/imports/collections/Recipes'
export default function (root, params, {userId}) {
  return Recipes.find().fetch()
}
