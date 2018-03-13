import React, { Component } from 'react'
import { Card, Table, Icon, List, Image, Divider, Segment } from 'semantic-ui-react'
import DateFormatter from './date-formatter'

const { formatISODate, formatMonth } = new DateFormatter()

export default class Body extends Component {
  render() {
    const { reports } = this.props
    
    return (
      <Segment style={{ paddingTop: '1em' }}  vertical>
        <Card.Group stackable centered >
        {
          reports.map((report) => {
            return <Card key={report._id}>
              <Card.Content>
                <Card.Header>
                  {report._id}
                </Card.Header>
                <Card.Meta>
                  <span>
                    Transaction ID
                    {/* {report.dateTransacted} */}
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
                          P {report.taskerFee}
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
                          P {report.customerFee}
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
                          P {report.mnmltaskrProfit}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span>{formatISODate(report.dateTransacted)}</span>
              </Card.Content>
            </Card>
          })
        }
        </Card.Group>
      </Segment>
    )
  }
}
