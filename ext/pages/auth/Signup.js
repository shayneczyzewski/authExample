import React from 'react'
import { Link } from 'react-router-dom'

import SignupForm from '@wasp/auth/forms/Signup'

const Signup = () => {
  return (
    <div>
      <div>
        <SignupForm/>
      </div>
      <div>
        I already have an account (<Link to="/login">go to login</Link>).
      </div>
    </div>
  )
}

export default Signup
