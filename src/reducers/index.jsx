import { combineReducers } from 'redux'

import transactionsReducer from './transactionsReducer'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  transactions: transactionsReducer,
  form: formReducer
})

export default reducer
