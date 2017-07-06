import Recipes from 'server/imports/collections/Recipes'
export default function (recipe, params, {userId}) {
  const {like} = Recipes.findOne(recipe._id)
  return like ? like.length : 0
}
