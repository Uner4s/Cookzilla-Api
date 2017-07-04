import Implements from 'server/imports/collections/Implements'
export default function (root, {_id}, {userId}) {
  const implement = Implements.findOne(_id)

  return implement
}
