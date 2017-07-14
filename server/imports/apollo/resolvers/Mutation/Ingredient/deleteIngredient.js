import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, {_id}, {userId}) {
  Ingredients.remove(_id)
  // Const es una variable que no puede cambiar, no se puede sobre escribir.
  // FindOne es cuando tienes el id qiue quieres buscar.
  return true
}
