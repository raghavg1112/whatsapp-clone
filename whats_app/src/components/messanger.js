import React, { useContext } from 'react'
import { AppBar, Toolbar, Box, styled } from '@mui/material'
import Login from './account/login'
import Chat from './chat/chat'
import { AccountContext } from '../context/AccountProvider'
export default function Messanger() {
  const Component = styled(Box)`
  height:100vh;
  background-color:#DCDCDC
  `

  const Header = styled(AppBar)`
  height:25%;
  background-color:#00bfa5
  `

  const { account } = useContext(AccountContext)
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      {account?<Chat />:<Login />}
    </Component>
  )
}
