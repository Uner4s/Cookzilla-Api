import Tools from 'server/imports/collections/Tools'
export default function (root, params, {userId}) {
  Tools.remove(params)
  // Const es una variable que no puede cambiar, no se puede sobre escribir.
  return Boolean
}
