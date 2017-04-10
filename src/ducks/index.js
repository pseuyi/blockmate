import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import ether from './ether'
import wallet from './wallet'

export default combineReducers({ users, user, ether, wallet })
