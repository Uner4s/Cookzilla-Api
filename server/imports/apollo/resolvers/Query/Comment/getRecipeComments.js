import Comments from 'server/imports/collections/Comments'
export default function (root, params, {userId}) {
  return Comments.find().fetch()
}
