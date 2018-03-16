import { connect } from 'react-redux'
import ReceiptsView from '../components/ReceiptsView'
import fetchTransactions from '../actions/transactionsActions'

const mapStateToProps = (state) => {
  return { 
    transactions: 
      state.transactions.transactions 
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions : () => { 
    dispatch(fetchTransactions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsView)
