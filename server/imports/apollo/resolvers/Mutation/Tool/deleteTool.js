import Tools from 'server/imports/collections/Tools'
export default function (root, {_id}, {userId}) {
  Tools.remove(_id)
  // Const es una variable que no puede cambiar, no se puede sobre escribir.
  return Boolean
}
