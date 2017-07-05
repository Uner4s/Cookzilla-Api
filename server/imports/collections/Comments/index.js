import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Comments = new Meteor.Collection('comments')

Comments.attachSchema(Schema)

global.Comments = Comments

export default Comments
