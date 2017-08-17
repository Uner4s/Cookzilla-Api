import {Meteor} from 'meteor/meteor'
export default function (recipe, {id}, {userId}) {
  recipe.like.map(function (variable) {
    const user = Meteor.users.findOne({_id: variable})
    return {
      email: user.emails.address
    }
  })
}
