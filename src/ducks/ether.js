import axios from 'axios'

// actions

const SEND = 'SEND'
const GET = 'GET_WALLETS'

// action creators

const sendEther = info => ({
  type: SEND,
  info
})
const getWallets = wallets => ({
  type: GET,
  wallets
})

// reducers

export default function reducer (ether = [], action) {
  switch (action.type) {
    case SEND:
      return action.info
    case GET:
      return action.wallets
    default:
      return ether
  }
}

// dispatchers

export const getAll = () => dispatch => {
  axios.get('http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/addresses')
  .then(res=>dispatch(getWallets(res.data)))
  .catch(err=>console.error('bad get', err))
}

export const send = data => dispatch => {
  const { user, password, toAddress, value} = data
  axios.post(
    `http://strato-ms-dev.eastus.cloudapp.azure.com/bloc/users/${user}/${toAddress}/send`,
    { password, toAddress, value }
  )
  .then(res=>console.log(res.data))
  .catch(err=>console.error('bad send', err))
}
