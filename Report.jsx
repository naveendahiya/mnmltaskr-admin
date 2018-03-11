import React, { Component } from 'react'
import { Card, Icon, Image, Table, Label, Segment } from 'semantic-ui-react'
import DateFormatter from './date-formatter'

const { formatISODate, formatMonth } = new DateFormatter()

export default class Report extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { reports } = this.props
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
              reports.map((report, index) => {
                return <Table.Row key={report._id}>
                  <Table.Cell><Label ribbon>{index + 1}</Label>{report._id}</Table.Cell>
                  <Table.Cell>{formatISODate(report.dateTransacted)}</Table.Cell>
                  <Table.Cell>{report.taskerFee}</Table.Cell>
                  <Table.Cell>{report.customerFee}</Table.Cell>
                  <Table.Cell>{report.mnmltaskrProfit}</Table.Cell>
                </Table.Row>
              })
            }
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}