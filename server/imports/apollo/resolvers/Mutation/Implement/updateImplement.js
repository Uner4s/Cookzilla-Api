import Implements from 'server/imports/collections/Implements'
export default function (root, {_id, name}, {userId}) {
  Implements.update(_id, {$set: {
    name: name
  }})

  const implement = Implements.findOne(_id)

  return implement
}
