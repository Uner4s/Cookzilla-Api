import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, {search}, {userId}) {
  return Ingredients.find({name: search}).fetch()
}
