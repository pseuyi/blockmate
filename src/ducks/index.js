import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import ether from './ether'

export default combineReducers({ users, user, ether })
