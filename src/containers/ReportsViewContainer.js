import { connect } from 'react-redux'
import ReportsView from '../components/ReportsView'
import fetchTransactions from '../actions/transactionsActions'

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions
})

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => { dispatch(fetchTransactions()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsView)
