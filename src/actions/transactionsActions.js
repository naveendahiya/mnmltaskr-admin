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