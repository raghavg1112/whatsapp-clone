import { ArrowBack } from '@mui/icons-material'
import { Box, Drawer, Typography,styled } from '@mui/material'
import React from 'react'
import Profile from './Profile'
export default function InfoDrawer({open,setOpen}) {
 
 
  const drawer_style={
    height:'97%',
    top:'4%',
    left:'2%',
    width:'27.7%'

  }


  const Header=styled(Box)`
  display:flex;
  height:17%;
  background:#008069;
  color:#ffffff;
  &>svg,&>p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
  }
  `

  const Component=styled(Box)`
  background:#ededed;
  height:83%;
  `

  const Text=styled(Typography)`
  font-size:larger
  `
  
  
  return (
<Drawer
open={open}
onClose={()=>{setOpen(false)}}
PaperProps={{sx:drawer_style}}
style={{zIndex:1500}}
>
    <Header>
<ArrowBack onClick={()=>{setOpen(false)}}></ArrowBack>
<Text>Profile</Text>
    </Header>
    <Component>
<Profile/>
    </Component>
</Drawer> 
 )
}
