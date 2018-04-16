import React from 'react'
import { Field } from 'redux-form'
import { Modal, Button, Form, Header, Segment } from 'semantic-ui-react'

const renderInput = (fields) => (
  <Field.Input {...fields} fluid iconPosition='left' />
)

const Login = (props) => {
  const { handleSubmit, submitting, pristine } = props

  return (
    <Modal open size='mini'>
      <Modal.Content>
        <Header>
          <Header.Content>Hello, mnmltaskr admin!</Header.Content>
          <Header.Subheader>LOGIN TO YOUR ACCOUNT</Header.Subheader>
        </Header>
        <Form onSubmit={handleSubmit} loading={submitting} size='large'>
          <Segment stacked>
            <Field
              name='email'
              type='email'
              icon='user'
              placeholder='Email address'
              component={renderInput}
            />
            <Field
              name='password'
              type='password'
              icon='lock'
              placeholder='Password'
              component={renderInput}
            />
            <Button type='submit' disabled={pristine || submitting} fluid>Login</Button>
          </Segment>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default Login
