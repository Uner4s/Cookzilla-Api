import likes from './likes'
import comments from './comments'
import ingredient from './ingredient'
import tool from './tool'
import userLike from './userLike'

export default {
  userLike,
  tool,
  ingredient,
  comments,
  likes
}
/*
  Recipe: {
    comments (recipe) {
      const comments = Comments.find({recipeId: recipe._id}).fetch()
      return comments.map((comment) => {
        const user = Meteor.users.findOne({_id: comment.userId})
        return {
          author: user.profile.name,
          content: comment.content
        }
      })
    }
  }
  */
