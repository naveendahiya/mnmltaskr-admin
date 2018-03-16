export default function fetchTransactions () {
  return async function(dispatch) {
    const fetched = await fetch('/reports')
    const transactions = await fetched.json() 

    dispatch({ 
      type: "FETCH_TRANSACTIONS_FULFILLED", 
      payload: transactions
    })
  }
}

export function fetchTransactionsByMonth () {
  return async function(dispatch) {
    const fetched = await fetch('/reportsByMonth')
    const transactionsByMonth = await fetched.json() 
    
    dispatch({ 
      type: "FETCH_TRANSACTIONS_BY_MONTH_FULFILLED", 
      payload: transactionsByMonth
    })
  }
}