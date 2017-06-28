import Implements from 'server/imports/collections/Implements'
export default function (root, params, {userId}) {
  const implementId = Implements.insert(params)
  return Implements.findOne(implementId)
}
