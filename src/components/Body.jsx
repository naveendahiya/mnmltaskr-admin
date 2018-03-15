import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import ReportsView from './ReportsView'
import ReceiptsView from './ReceiptsView'

export default class Body extends Component {
  componentDidMount() {
    this.props.fetchTransactions()
  }
  
  render() {
    const { transactions, activeItem } = this.props

    console.log('PROPS OF BODY', this.props)

    const view = 
      ( activeItem === 'reports' 
      ? <ReportsView transactions={transactions} /> 
      : <ReceiptsView transactions={transactions} /> )

    return (
      <div>
        <SearchBar />
        <Container>
          {view}
        </Container>
      </div>
    ) 
  }
}
