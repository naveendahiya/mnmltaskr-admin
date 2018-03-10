import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from './Header'
import Body from './Body'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default Index