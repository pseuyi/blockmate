import axios from 'axios'

// actions
const SEND = 'SEND'
const GET_WALLETS = 'GET_WALLETS'

// action creators

const send = info = ({
  type: SEND,
  info
})
const getWallets = () => {
  type: GET_WALLETS,
}

// reducers


// dispatchers

export const send = data => dispatch => {
  const { user, password, toAddress, value} = data
  axios.post(
    `http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users/${user}/${toAddress}/send`,
    { password, toAddress, value }
  )
  .then(res=>console.log(res.data))
  .catch(err => console.error('bad send', err))
}
