import { combineReducers } from 'redux'
import todos from './Todo'
import counter from './Counter'
import visibilityFilter from './VisibilityFilter'
export default combineReducers({
  todos,
  counter,
  visibilityFilter
})