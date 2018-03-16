export default function transactionsReducer(state={}, action) {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_FULFILLED': {
      return {
        ...state,
        transactions: action.payload
      }
      break;
    }
    case 'FETCH_TRANSACTIONS_BY_MONTH_FULFILLED': {
      return {
        ...state, 
        transactionsByMonth: action.payload
      }
      break;
    }
  }

  return state
}