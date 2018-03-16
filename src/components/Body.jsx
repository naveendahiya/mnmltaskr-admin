import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import TransactionsByMonthContainer from '../containers/TransactionsByMonthContainer'
import TransactionsContainer from '../containers/TransactionsContainer'

export default class Body extends Component {
  render() {
    const { activeItem } = this.props

    const view = ( 
      activeItem === 'reports' 
      ? <TransactionsByMonthContainer /> 
      : <TransactionsContainer /> 
    )

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
