import React, { Component } from 'react'
import { Table, Label, Segment } from 'semantic-ui-react'
import { format } from 'date-fns'
import solveTotalFees from '../actions/FeeSolver'

export default class ReportsView extends Component {
  componentDidMount () {
    this.props.fetchTransactions()
  }

  render () {
    let { transactions } = this.props
    transactions = transactions || []

    const headers = [
      'Taskee uid',
      'Task id',
      'Status',
      'Transaction start',
      'Transaction end',
      'Total fee',
      'Total mnmltasker profit',
      'Total payment'
    ]

    return (
      <div>
        <Segment style={{ paddingTop: '1em' }} vertical>
          <Table color='grey' celled singleLine size='small' compact='very'>
            <Table.Header>
              <Table.Row>
                { headers.map((header) => (
                  <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              { transactions.map((transaction, index) => {
                const totalFees = solveTotalFees(transaction.approved)

                return (
                  <Table.Row key={transaction.taskId}>
                    <Table.Cell><Label ribbon>{index + 1}</Label>{transaction.owner}</Table.Cell>
                    {/* <Table.Cell>{formatISODate(transaction.dateTransacted)}</Table.Cell> */}
                    <Table.Cell>{transaction.taskId}</Table.Cell>
                    <Table.Cell>{transaction.status}</Table.Cell>
                    <Table.Cell>{format(transaction.transactionStart, 'MMM D, YYYY hh:mm:ssa')}</Table.Cell>
                    <Table.Cell>
                      { transaction.transactionEnd
                        ? format(transaction.transactionEnd, 'MMM D, YYYY hh:mm:ssa')
                        : 'N/A'
                      }
                    </Table.Cell>
                    <Table.Cell positive>&#8369; {totalFees.totalFee}</Table.Cell>
                    <Table.Cell positive>&#8369; {totalFees.totalProfit}</Table.Cell>
                    <Table.Cell positive>&#8369; {totalFees.totalPayment}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}
