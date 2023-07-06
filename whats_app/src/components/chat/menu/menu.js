import { Box } from '@mui/system';
import React, { useContext } from 'react'
import Header from './header'
import Search from './search'
import Conversation from './conversation';
export default function Menu() {

    return (
   <Box>
    <Header/>
    <Search/>
    <Conversation/>
   </Box>
  )
}
