import axios from 'axios'

// actions
const VIEW_BALANCE = 'VIEW_BALANCE'

// action creators

const view = wallet => ({
  type: VIEW_BALANCE,
  wallet
})

// reducers

export default function reducer (wallet = {}, action) {
  switch (action.type) {
    case VIEW_BALANCE:
      return action.wallet
    default:
      return wallet
  }
}

// dispatchers

export const getWallet = addr => dispatch => {
  console.log('in view', addr)
  axios.get(`http://strato-ms-dev.eastus.cloudapp.azure.com/strato-api/eth/v1.2/account?address=${addr}`)
  .then(res=>dispatch(view(res.data)))
  .catch(err=>console.error('bad get', err))
}
