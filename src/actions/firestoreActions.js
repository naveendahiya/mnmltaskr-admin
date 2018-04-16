import { auth, db } from '../firebase'

const signinUser = async (values) => {
  try {
    const userAuth = await auth.signInWithEmailAndPassword(values.email, values.password)

    if (userAuth.uid) {
      const userRef = await db.collection('users').doc(userAuth.uid).get()
      const isAdmin = userRef.get('isAdmin')

      if (isAdmin) {
        localStorage.setItem('user', JSON.stringify(userRef.data()))
        alert('Good friend! You have successfully logged in...')
        location.reload()
      } else {
        alert('This user is not an admin...')
      }
    }
  } catch (e) {
    alert('Error logging in! ' + e.message)
    throw e
  }
}

const logout = async () => {
  try {
    await auth.signOut()
    localStorage.removeItem('user')
    alert(':(', 'You have logged out. Goodbye, friend!')
    location.reload()
  } catch (e) {
    throw e
  }
}

export { signinUser, logout }
