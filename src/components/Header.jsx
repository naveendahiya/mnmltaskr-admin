import React, { Component } from 'react'
import { Input, Menu, Container, Button, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    const { activeItem, handleItemClick } = this.props
    
    // print
    // console.log('props in header ==>', this.props)
    // console.log('type of handleItemClick', this.props.handleItemClick)

    return (
      <Menu fixed='top' borderless pointing>
        <Container >
          <Menu.Item header>
            <Icon name='tasks' />
            MNMLTRACKR ADMIN
          </Menu.Item>
          <Menu.Item name='reports' 
            active={activeItem === 'reports'} 
            onClick={() => handleItemClick('reports')}
            />
          <Menu.Item name='receipts' 
            active={activeItem === 'receipts'} 
            onClick={() => handleItemClick('receipts')}
            />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button basic animated>
                <Button.Content visible>
                  Logout
                </Button.Content>
                <Button.Content hidden>
                  <Icon color='black' name='sign out' />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
