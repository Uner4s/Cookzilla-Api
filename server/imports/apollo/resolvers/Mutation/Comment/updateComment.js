import Comments from 'server/imports/collections/Comments'
export default function (root, {_id, content}, {userId}) {
  Comments.update(_id, {$set: {
    content: content
  }})
  const comment = Comments.findOne(_id)
  return comment
}
