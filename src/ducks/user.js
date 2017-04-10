import axios from 'axios'

// actions
const WAITING_TO_CREATE = 'WAITING_TO_CREATE'
const CREATE = 'CREATE_USER'

// action creators
const wait = () => ({
  type: WAITING_TO_CREATE, msg: "Making a new account"
})
const create = user  => ({ type: CREATE, user })

// reducers
export default function reducer (user = {}, action) {
  switch (action.type) {
    case WAITING_TO_CREATE:
      return { msg: action.msg }
    case CREATE:
      return action.user
    default:
      return user
  }
}

// dispatchers
// export const getAddress = () => dispatch => {
//   axios.get('http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users')
//   .then(res=>dispatch(init(res.data)))
//   .catch(err => console.error('bad get', err))
// }

export const addUser = user => dispatch => {
  dispatch(wait())
  axios.post(`http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users/${user.name}`, {faucet: user.faucet, password: user.password})
  .then(res=>{
    console.log('new user created')
    dispatch(create({name: user.name, address: res.data}))
  })
  .catch(err => console.error('bad post', err))
}
