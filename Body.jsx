import React, { Component } from 'react'
import { Container, Input, Segment } from 'semantic-ui-react'
import Report from './Report'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Segment style={{ padding: '5em 0em 0em 0em' }} vertical>
            <Input fluid action={{ icon: 'search' }} placeholder='Search...' />
          </Segment>
        </Container>
  
        <Container>
          <Report />
          <Report />
          <Report />
          <Report />
          <Report />
        </Container>
      </div>
    )
  }
}
