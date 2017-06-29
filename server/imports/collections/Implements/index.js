import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Implements = new Meteor.Collection('implements')

Implements.attachSchema(Schema)

global.Implements = Implements

export default Implements
