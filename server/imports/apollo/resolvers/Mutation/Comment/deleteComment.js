import Comments from 'server/imports/collections/Comments'
export default function (root, {_id}, {userId}) {
  Comments.remove(_id)
  return true
}
