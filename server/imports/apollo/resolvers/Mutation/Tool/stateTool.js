import Tools from 'server/imports/collections/Tools'
export default function (root, {_id}, {userId}) {
  Tools.update(_id, {$set: {
    state: true
  }})

  const tool = Tools.findOne(_id)

  return tool
}
