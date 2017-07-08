import Tools from 'server/imports/collections/Tools'
export default function (root, params, {userId}) {
  return Tools.find().fetch()
}
