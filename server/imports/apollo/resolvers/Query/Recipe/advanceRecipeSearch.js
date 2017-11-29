import Recipes from 'server/imports/collections/Recipes'
import Ingredients from 'server/imports/collections/Ingredients'
import Tools from 'server/imports/collections/Tools'
import map from 'lodash/map'
export default function (root, { tools, ingredients }, { userId }) {
  const toolsAll = map(tools, tool => Tools.findOne(tool)) // Get the elements like an array, if dont exist, put undefined
  const toolsOnly = toolsAll.filter(function (n) {
    return n !== undefined
  }) // Delete elements undefined in the array
  const toolBoolean = toolsOnly.filter(Boolean)
  const toolsId = map(toolBoolean, tool => tool._id) // Get only Id to do the search

  const ingredientsAll = map(ingredients, ingredient =>
    Ingredients.findOne(ingredient)
  ) // Get the elements like an array, if dont exist, put undefined
  const ingredientsOnly = ingredientsAll.filter(function (n) {
    return n !== undefined
  }) // Delete elements undefined in the array
  const ingredientBoolean = ingredientsOnly.filter(Boolean)
  const ingredientsId = map(ingredientBoolean, ingredient => ingredient._id) // Get only Id to do the search

  if (toolsId !== '' && ingredientsId !== '') {
    return Recipes.find({
      $and: [
        { tool: { $in: toolsId } },
        { ingredient: { $in: ingredientsId } },
        { state: { $exists: true } }
      ]
    }).fetch()
  }
}
