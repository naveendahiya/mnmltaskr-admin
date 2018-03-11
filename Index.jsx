import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Header from './Header'
import Body from './Body'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'reports' }
    this.handleItemClick = this.handleItemClick.bind(this)     
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <Login />
      // <div>
      //   <Header activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      //   <Body activeItem={this.state.activeItem} />
      // </div>
    )
  }
}
 
export default Index