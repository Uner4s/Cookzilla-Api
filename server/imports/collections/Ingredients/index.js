import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Ingredients = new Meteor.Collection('ingredients')

Ingredients.attachSchema(Schema)

global.Ingredients = Ingredients

export default Ingredients
