import Tools from 'server/imports/collections/Tools'
export default function (root, params, {userId}) {
  const tools = Tools.find({ state: { $exists: false } }).fetch()
  return tools
}
