import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Report from './Report'

export default class Body extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Container>
          <Report />
        </Container>
      </div>
    )
  }
}
