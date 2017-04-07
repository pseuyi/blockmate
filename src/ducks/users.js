import axios from 'axios'

// actions
const INITIALIZE = 'INITIALIZE_USERS'
const CREATE     = 'CREATE_USER'

// action creators
const init  = users => ({ type: INITIALIZE, users })
const create = user  => ({ type: CREATE, user })

// reducers
export default function reducer (users = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.users
    case CREATE:
      return [action.user, ...users]
    default:
      return users
  }
}

// dispatchers
export const getUsers = () => dispatch => {
  axios.get('http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users')
  .then(res=>dispatch(init(res.data)))
  .catch(err => console.error('bad get', err))
}

export const addUser = user => dispatch => {
  axios.post(`http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users/${user}`, user)
  .then(res=>dispatch(create(res.data)))
  .catch(err => console.error('bad post', err))
}
