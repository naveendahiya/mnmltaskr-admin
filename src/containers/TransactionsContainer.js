import { connect } from 'react-redux'
import Body from  '../components/Body'
import fetchTransactions from '../actions/transactionsActions'

const mapStateToProps = (state) => {
  console.log('maptostateprops: ', state.transactions.transactions)
  return { transactions: state.transactions.transactions }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions : () => { dispatch(fetchTransactions()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
