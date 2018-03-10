import React, { Component } from 'react'
import { Container, Input, Segment } from 'semantic-ui-react'

export default class SearchBar extends Component {
  render() {
    return (
      <Container text>
        <Segment style={{ padding: '5em 0em 0em 0em' }} vertical>
          <Input fluid action={{ icon: 'search' }} placeholder='Search...' />
        </Segment>
      </Container>
    )
  }
}
