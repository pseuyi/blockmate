import axios from 'axios'

// actions
const INITIALIZE = 'INITIALIZE_USERS'

// action creators
const init  = users => ({ type: INITIALIZE, users })

// reducers
export default function reducer (users = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.users
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
