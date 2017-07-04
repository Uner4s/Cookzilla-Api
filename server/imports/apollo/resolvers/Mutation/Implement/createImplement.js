import Implements from 'server/imports/collections/Implements'
export default function (root, params, {userId}) {
  const implementId = Implements.insert(params)
// Const es una variable que no puede cambiar, no se puede sobre escribir.
  return Implements.findOne(implementId)
}
