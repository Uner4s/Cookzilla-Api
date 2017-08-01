import role from './role'
import {Meteor} from 'meteor/meteor'
role.allow('commentRecipes', function (root, {_id}) {
  Meteor.user.findOne(_id).roles.include('colaborator')
})
