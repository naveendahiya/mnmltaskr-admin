import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Report from './Report'
import Receipt from './Receipt'

export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = { reports: [] }    
  }

  async fetchReports () {
    const fetched = await fetch('/reports')
    const reports = await fetched.json()

    this.setState({ reports: reports })
  }

  componentDidMount () {
    this.fetchReports()
  }

  render() {
    const { activeItem } = this.props
    const { reports } = this.state
    const view = ( activeItem === 'reports' ? <Report reports={reports} /> : <Receipt reports={reports} /> )

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
