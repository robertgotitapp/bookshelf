import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

function LoginForm({buttonText, onSubmit}) {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input id="username" type="text" name="name" />
      <label>Password:</label>
      <input id="password" type="password" name="password" />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <div>Bookshelf</div>
      <Logo />
      <div>
        <button onClick={() => setShowLoginDialog(true)}>Login</button>
        <Dialog isOpen={showLoginDialog}>
          <LoginForm onSubmit={login} buttonText="Login" />
          <div>
            <button onClick={() => setShowLoginDialog(false)}>Dismiss</button>
          </div>
        </Dialog>
      </div>
      <div>
        <button onClick={() => setShowRegisterDialog(true)}>Register</button>
        <Dialog isOpen={showRegisterDialog}>
          <LoginForm onSubmit={register} buttonText="Register" />
          <div>
            <button onClick={() => setShowRegisterDialog(false)}>
              Dismiss
            </button>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
