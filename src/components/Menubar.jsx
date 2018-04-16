import React from 'react'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'
import { logout } from '../actions/firestoreActions'

const Header = (props) => (
  <Menu fixed='top' borderless pointing>
    <Container >
      <Menu.Item header>
        <Icon name='tasks' />
          MNMLTRACKR ADMIN
      </Menu.Item>
      <Menu.Item name='reports' active/>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button onClick={logout} basic animated>
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon color='black' name='sign out' />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Header
