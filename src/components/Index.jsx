import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Header from './Header'
import Body from './Body'

class Index extends React.Component {
  render() {
    const { activeItem, selectItem } = this.props

    return (
      // <Login />
      <div>
        <Header activeItem={activeItem} handleItemClick={selectItem} />
        <Body activeItem={activeItem} />
      </div>
    )
  }
}
  
export default Index