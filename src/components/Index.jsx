import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Header from './Header'
import  TransactionsContainer from '../containers/TransactionsContainer'

class Index extends React.Component {
  render() {
    const { activeItem, selectItem } = this.props
    
    console.log('props from index ==>', this.props)
    console.log('type of selectItem', typeof this.props.selectItem)

    return (
      // <Login />
      <div>
        <Header activeItem={activeItem} handleItemClick={selectItem} />
        <TransactionsContainer activeItem={activeItem} />
      </div>
    )
  }
}
  
export default Index