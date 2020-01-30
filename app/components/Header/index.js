import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Logo from '../Logo'

function Header() {
  return (
    <AppBar position="static" style={{ background: 'black' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <span>
          <Logo />
        </span>
        <Toolbar disableGutters>
          <AccountCircleIcon style={{ color: 'f2f2f2' }} />
          <Typography>User</Typography>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default Header
