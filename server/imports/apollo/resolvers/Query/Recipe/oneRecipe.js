import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id}, {userId}) {
  return Recipes.findOne(_id)
}
