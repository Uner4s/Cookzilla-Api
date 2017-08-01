import Tools from 'server/imports/collections/Tools'
export default function (root, {search}, {userId}) {
  return Tools.find({name: search}).fetch()
}
