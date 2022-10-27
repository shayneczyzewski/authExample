import React from 'react'

import logout from '@wasp/auth/logout.js'
import '../Main.css'

const Main = ({ user }) => {
  return (
    <div>
      <p>Welcome, { user.username }!</p>
      <button
        variant='contained' color='primary'
        onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Main
