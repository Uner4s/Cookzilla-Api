import Recipes from 'server/imports/collections/Recipes'
import Ingredients from 'server/imports/collections/Ingredients'
import Tools from 'server/imports/collections/Tools'
import map from 'lodash/map'
export default function (root, {tools, ingredients}, {userId}) {
  // map(array, f(x))
  // const variable = map(tools, tool => { return tool.name })
  // tool => {name: 'Olla'}
  // const toolsId = map(tools, tool => Tools.findOne(tool)._id)
  const toolsId = map(tools, tool => Tools.findOne(tool)._id)
  const ingredientsId = map(ingredients, ingredient => Ingredients.findOne(ingredient)._id)
  console.log(toolsId, ingredientsId)
  // console.log(toolsid.map((tool) => toolsid.findOne({name: map(tools, tool => tool.name)})))
  // const ingredientsid = Ingredients.find({ingredientId: ingredient._id}).fetch()
  return Recipes.find({
    '$and': [
      {tool: {'$in': toolsId}},
      {ingredient: {'$in': ingredientsId}}
    ]}).fetch()
}
