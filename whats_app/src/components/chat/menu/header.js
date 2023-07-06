import React, { Component, useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box } from '@mui/system';
import { Chat, RestartAlt as Story } from '@mui/icons-material'
import styled from '@emotion/styled';
import HeaderMenu from './header_menu'
import InfoDrawer from '../Drawer/info_drawer';
export default function Header() {
  const { account } = useContext(AccountContext);


  const Component = styled(Box)`
max-width:400px;
height:10%;
background:#ededed;
display:flex;
align-items:center;
padding:12px;

`

  const Wrapper = styled(Box)`
margin-left:auto;
&>*{
  margin:5px;
}
`

const Profile=styled('img')({
  borderRadius:'50%',
  height:40,
})
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const handleOpen=()=>{
    setOpenDrawer(true);
  }
  return (
    <>
      <Component>

        <Profile src={account.picture} onClick={handleOpen}></Profile>

        <Wrapper>
          <Chat />
          <Story />
          <HeaderMenu />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
