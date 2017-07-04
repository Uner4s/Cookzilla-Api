import Ingredients from 'server/imports/collections/Ingredients'
export default function (root, params, {userId}) {
  const ingredientId = Ingredients.insert(params)
  // Const es una variable que no puede cambiar, no se puede sobre escribir.
  // FindOne es cuando tienes el id qiue quieres buscar.
  return Ingredients.findOne(ingredientId)
}
