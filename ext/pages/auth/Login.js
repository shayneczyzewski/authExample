import React from 'react'
import { Link } from 'react-router-dom'

import { GoogleSignInButton } from '@wasp/auth/buttons/Google'
import LoginForm from '@wasp/auth/forms/Login'

const Login = () => {
  return (
    <div>
      <div>
        <LoginForm/>
      </div>
      <div>
        I don't have an account yet (<Link to="/signup">go to signup</Link>).
      </div>
      <div>
        <GoogleSignInButton/>
      </div>
    </div>
  )
}

export default Login
