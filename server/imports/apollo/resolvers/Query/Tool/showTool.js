import Tools from 'server/imports/collections/Tools'
export default function (root, {_id}, {userId}) {
  const tool = Tools.findOne(_id)

  return tool
}
