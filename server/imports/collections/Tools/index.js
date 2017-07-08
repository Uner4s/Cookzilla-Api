import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Tools = new Meteor.Collection('tools')

Tools.attachSchema(Schema)

global.Tools = Tools

export default Tools
