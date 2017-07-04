import Implements from 'server/imports/collections/Implements'
export default function (root, params, {userId}) {
  Implements.find().fetch()
}
