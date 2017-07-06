import Recipes from 'server/imports/collections/Recipes'
export default function (recipe, params, {userId}) {
  // Find all likes in every recipe
  const {like} = Recipes.findOne(recipe._id)
  // Find all title in every recipe
  const {title} = Recipes.findOne(recipe._id)
  // Return the name and number of likes of the recipe
  return title && like ? like.length : 0
}
