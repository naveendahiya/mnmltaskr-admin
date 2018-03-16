import { connect } from 'react-redux'
import ReportsView from '../components/ReportsView'
import { fetchTransactionsByMonth } from '../actions/transactionsActions'

const mapStateToProps = (state) => {
  return { 
    transactionsByMonth: 
      state.transactions.transactionsByMonth 
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTransactionsByMonth : () => { 
    dispatch(fetchTransactionsByMonth()) 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsView)
