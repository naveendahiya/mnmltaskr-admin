import { reduxForm } from 'redux-form'
import Login from '../components/Login'

export default reduxForm({
  form: 'login'
})(Login)
