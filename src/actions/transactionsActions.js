import { db } from '../firebase'

export default function fetchTransactions () {
  return async function (dispatch) {
    const transactions = await db.collection('transactions').get()

    const transactionsList = []
    transactions.forEach(transaction =>
      transactionsList.push(transaction.data())
    )

    dispatch({
      type: 'FETCH_TRANSACTIONS_FULFILLED',
      payload: transactionsList
    })
  }
}
