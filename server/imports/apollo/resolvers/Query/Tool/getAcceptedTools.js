import Tools from 'server/imports/collections/Tools'
export default function (root, params, {userId}) {
  const tools = Tools.find({ state: { $exists: true } }).fetch()
  return tools
}
