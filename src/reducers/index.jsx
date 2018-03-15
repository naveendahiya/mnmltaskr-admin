import { combineReducers } from 'redux';

import transactionsReducer from './transactionsReducer'
import itemsReducer from './itemsReducer'

const reducer = combineReducers({
  transactions: transactionsReducer,
  items: itemsReducer
});

export default reducer
