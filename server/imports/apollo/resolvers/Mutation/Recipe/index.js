import addRecipe from './addRecipe'
import updateRecipe from './updateRecipe'
import deleteRecipe from './deleteRecipe'
import updateRecipeTool from './updateRecipeTool'
import updateRecipeIngredient from './updateRecipeIngredient'
import likeRecipe from './likeRecipe'
import stateRecipe from './stateRecipe'
import {Roles} from 'meteor/nicolaslopezj:roles'
export default {
  @Roles.action('acceptRecipe')
  stateRecipe,
  likeRecipe,
  updateRecipeIngredient,
  updateRecipeTool,
  deleteRecipe,
  updateRecipe,
  addRecipe
  // @Roles.action('acceptRecipe')
  // acceptRecipe
}
