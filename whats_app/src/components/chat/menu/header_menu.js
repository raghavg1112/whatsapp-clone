import React from 'react'
import { MoreHoriz } from '@mui/icons-material'
import { Menu,MenuItem } from '@mui/material'
import { useState } from 'react'
export default function HeaderMenu() {
  const [open,setOpen]=useState(false);
  const handleClose=()=>{
    setOpen(false);
  }
  const handleOpen=(e)=>{
    setOpen(e.currentTarget);
  }
  return (
<>
<MoreHoriz onClick={handleOpen} />
<Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        keepMounted           // this and anchor origin and the function which is called by anchor(icon which is clicked) such that we need to pass event for that and hence are used so that the menu open below the icon else it can open anywhere generally it opens at left bottom
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
</> 
 )
}
