import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Recipes = new Meteor.Collection('recipes')

Recipes.attachSchema(Schema)

global.Recipes = Recipes

export default Recipes
