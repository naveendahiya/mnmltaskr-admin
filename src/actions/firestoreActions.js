import { auth, db } from '../firebase'
import swal from 'sweetalert'

const signinUser = async (values) => {
  try {
    const userAuth = await auth.signInWithEmailAndPassword(values.email, values.password)

    if (userAuth.uid) {
      const userRef = await db.collection('users').doc(userAuth.uid).get()
      const isAdmin = userRef.get('isAdmin')

      if (isAdmin) {
        localStorage.setItem('user', JSON.stringify(userRef.data()))
        const oked = await swal('Good friend!', 'You have successfully logged in...', 'success')

        if (oked) {
          location.reload()
        }
      } else {
        swal('Oops!', 'This user is not an admin...', 'warning')
      }
    }
  } catch (e) {
    swal('Error logging in! ', e.message, 'error')
    throw e
  }
}

const logout = async () => {
  try {
    await auth.signOut()
    localStorage.removeItem('user')
    const oked = await swal(':(', 'You have logged out. Goodbye, friend!')

    if (oked) {
      location.reload()
    }
  } catch (e) {
    throw e
  }
}

export { signinUser, logout }
