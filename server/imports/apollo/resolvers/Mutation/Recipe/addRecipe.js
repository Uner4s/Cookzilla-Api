import Ingredients from 'server/imports/collections/Ingredients'
import Tools from 'server/imports/collections/Tools'
import Recipes from 'server/imports/collections/Recipes'
import map from 'lodash/map'

export default function (root, {recipe}, {userId}) {
  const title = recipe.title
  const dificult = recipe.dificult
  const time = recipe.time
  const gloss = recipe.gloss
  const ingredientP = recipe.ingredient
  const toolP = recipe.tool

  const ingredientAll = map(ingredientP, ingredient => Ingredients.findOne({'$and': [ingredient, {state: { $exists: true }}]}))
  const ingredientsOnly = ingredientAll.filter(function (n) { return n !== undefined }) // Delete elements undefined in the array
  const ingredient = map(ingredientsOnly, ingredient => ingredient._id) // Get only Id to do the search

  const toolAll = map(toolP, tool => Tools.findOne({'$and': [tool, {state: { $exists: true }}]}))
  const toolsOnly = toolAll.filter(function (n) { return n !== undefined }) // Delete elements undefined in the array
  const tool = map(toolsOnly, tool => tool._id) // Get only Id to do the search

  if (ingredient.length !== ingredientP.length && tool.length !== toolP.length) {
    console.log('Cant create a recipe with tools or ingredients not accepted')
  }
  else {
    const recipeId = Recipes.insert({title, userId, dificult, time, gloss, ingredient, tool})
    return Recipes.findOne(recipeId)
  }
}
