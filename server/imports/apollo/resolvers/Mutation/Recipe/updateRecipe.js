import Recipes from 'server/imports/collections/Recipes'
export default function (root, {_id, title, dificult, time}, {userId}) {
  Recipes.update(_id, {$set: {
    title: title, dificult: dificult, time: time
  }})
}
