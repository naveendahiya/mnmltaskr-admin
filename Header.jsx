import React, { Component } from 'react'
import { Input, Menu, Container, Button, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'reports' }
    this.handleItemClick = this.handleItemClick.bind(this) 
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' borderless pointing>
        <Container >
          <Menu.Item header>
            <Icon name='tasks' />
            MNMLTRACKR ADMIN
          </Menu.Item>
          <Menu.Item name='reports' 
            active={activeItem === 'reports'} 
            onClick={this.handleItemClick} />
          <Menu.Item name='receipts' 
            active={activeItem === 'receipts'} 
            onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            {/* <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item> */}
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
