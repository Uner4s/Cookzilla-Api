import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id, tool}, {userId}) {
  //  console.log(tool)
  Recipes.update(_id, {$set: {
    tool: tool
  }})
}
