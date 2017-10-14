import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, {_id, name}, {userId}) {
  Ingredients.update(_id, {$set: {
    name: name
  }})
  // Const es una variable que no puede cambiar, no se puede sobre escribir.
  // FindOne es cuando tienes el id qiue quieres buscar.
  return Ingredients.findOne(_id)
}
