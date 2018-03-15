import React, { Component } from 'react'
import { Card, Icon, Image, Table, Label, Segment } from 'semantic-ui-react'
import DateFormatter from './date-formatter'

const { formatISODate, formatMonth } = new DateFormatter()

export default class ReportsView extends Component {
  render() {
    let { transactions } = this.props

    if (!transactions) {
      transactions = []
    }

    const headers = [
      'Transaction ID', 
      'Transaction Date', 
      'Tasker Fee', 
      'Customer Fee', 
      'mnmltaskr Profit'
    ]

    return (
      <Segment style={{ paddingTop: '1em' }}  vertical>
        <Label pointing='below' style={{ margin: '0em' }}>February 2018</Label>
        <Table color='grey' singleLine celled compact unstackable>
          <Table.Header>
            <Table.Row>
              {
                headers.map((header) => {
                  return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
                })
              }
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              transactions.map((transaction, index) => {
                return <Table.Row key={transaction._id}>
                  <Table.Cell><Label ribbon>{index + 1}</Label>{transaction._id}</Table.Cell>
                  <Table.Cell>{formatISODate(transaction.dateTransacted)}</Table.Cell>
                  <Table.Cell>{transaction.taskerFee}</Table.Cell>
                  <Table.Cell>{transaction.customerFee}</Table.Cell>
                  <Table.Cell>{transaction.mnmltaskrProfit}</Table.Cell>
                </Table.Row>
              })
            }
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}