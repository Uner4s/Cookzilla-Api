import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id, ingredient}, {userId}) {
  Recipes.update(_id, {$set: {
    [ingredient]: ingredient
  }})
}
