import {Meteor} from 'meteor/meteor'
export default function (recipe, {id}, {userId}) {
  const userLike = recipe.like.map(function (variable) {
    const user = Meteor.users.findOne({_id: variable})
    console.log(user.emails[0].address)
    return {
      email: user.emails[0].address
    }
  })
  return userLike
}
