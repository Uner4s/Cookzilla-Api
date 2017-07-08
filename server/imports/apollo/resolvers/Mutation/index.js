import Ingredient from './Ingredient'
import Tool from './Tool'
import Recipe from './Recipe'
import Comment from './Comment'

export default {
  ...Comment,
  ...Recipe,
  ...Tool,
  ...Ingredient

}
