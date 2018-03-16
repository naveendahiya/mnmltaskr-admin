import React, { Component } from 'react'
import { Card, Table, Icon, List, Image, Divider, Segment } from 'semantic-ui-react'
import DateFormatter from './date-formatter'

const { formatISODate, formatMonth } = new DateFormatter()

export default class ReceiptsView extends Component {
  componentDidMount() {
    this.props.fetchTransactions()
  }

  render() {
    let { transactions } = this.props

    if (!transactions) {
      transactions = []
    }

    return (
      <Segment style={{ paddingTop: '2em' }}  vertical>
        <Card.Group stackable centered >
        {
          transactions.map((transaction) => {
            return <Card key={transaction._id}>
              <Card.Content>
                <Card.Header>
                  {transaction._id}
                </Card.Header>
                <Card.Meta>
                  <span>
                    Transaction ID
                    {/* {transaction.dateTransacted} */}
                  </span>
                </Card.Meta>
                <Divider />
                <Card.Description>
                  <List animated verticalAlign='middle'>
                    <List.Item>
                      <List.Icon name='tag' verticalAlign='middle' />
                      <List.Content>
                        <List.Header>
                          Tasker fee: 
                        </List.Header>
                        <List.Description>
                          P {transaction.taskerFee}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='tag' verticalAlign='middle' />
                      <List.Content>
                        <List.Header>
                          Customer fee: 
                        </List.Header>
                        <List.Description>
                          P {transaction.customerFee}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='tag' verticalAlign='middle' />
                      <List.Content>
                        <List.Header>
                          mnmltaskr profit: 
                        </List.Header>
                        <List.Description>
                          P {transaction.mnmltaskrProfit}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span>{formatISODate(transaction.dateTransacted)}</span>
              </Card.Content>
            </Card>
          })
        }
        </Card.Group>
      </Segment>
    )
  }
}
