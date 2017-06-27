import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Implements = new Meteor.Collection('implements')

Implements.attachSchema(Schema)

global.Implements = Implement

export default Implements
