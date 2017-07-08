import Tools from 'server/imports/collections/Tools'
export default function ({tool}, params, {userId}) {
  console.log(Tools.find({_id: {'$in': tool}}).fetch())
  return Tools.find({_id: {'$in': tool}}).fetch()
}
