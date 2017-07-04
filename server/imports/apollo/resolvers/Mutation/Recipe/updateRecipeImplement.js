import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id, implement}, {userId}) {
  //  console.log(implement)
  Recipes.update(_id, {$set: {
    implement: implement
  }})
}
