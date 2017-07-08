import Comments from '../../../../collections/Comments'
import {Meteor} from 'meteor/meteor'
export default function (recipe, params, {userId}) {
  const comments = Comments.find({recipeId: recipe._id}).fetch()
  return comments.map((comment) => {
    const user = Meteor.users.findOne({_id: comment.userId})
    return {
      author: user.profile.name || 'Anonymous',
      content: comment.content
    }
  })
}
