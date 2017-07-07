import Comments from 'server/imports/collections/Comments'
export default function (root, {recipeId, content}, {userId}) {
  const commentId = Comments.insert({userId, recipeId, content})
  return Comments.findOne(commentId)
}
