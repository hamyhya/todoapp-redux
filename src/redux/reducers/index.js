import {combineReducers} from 'redux'

import toggle from './toggle'
import todos from './todos'

export default combineReducers({
  toggle,
  todos
})