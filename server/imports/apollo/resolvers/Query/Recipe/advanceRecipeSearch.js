import Recipes from 'server/imports/collections/Recipes'
export default function (root, {tools, ingredients}, {userId}) {
  return Recipes.find({
    '$and': [
      {tool: {'$in': tools}},
      {ingredient: {'$in': ingredients}}
    ]}).fetch()
}
