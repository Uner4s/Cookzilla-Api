import Recipes from 'server/imports/collections/Recipes'
import some from 'lodash/some'
export default function (root, params, {userId}) {
  const {_id} = params
  const {like} = Recipes.findOne(_id)

/*
  console.log({_id})
  console.log({like})
  console.log(like)
  console.log({userId})
*/
  if (some(like, {userId})) {
    throw new Error('User already liked')
  }

  Recipes.update(_id, {$push: {like: {userId}}})

  return Recipes.findOne(_id)
}
