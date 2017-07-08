import Comments from 'server/imports/collections/Comments'
import {Meteor} from 'meteor/meteor'
export default function (root, {_id}, {userId}) {
  const comments = Comments.find({recipeId: _id}).fetch()
  return comments.map((comment) => {
    const user = Meteor.users.findOne({_id: comment.userId})
    return {
      author: user.profile.name,
      content: comment.content
    }
  })
}
