import Tools from 'server/imports/collections/Tools'
export default function (root, {_id, name}, {userId}) {
  Tools.update(_id, {$set: {
    name: name
  }})

  const tool = Tools.findOne(_id)

  return tool
}
