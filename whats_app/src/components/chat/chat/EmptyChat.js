import React from 'react'
import { Box, Typography } from '@mui/material'
import { emptyChatImage } from '../../../constants/data'
import styled from '@emotion/styled'
export default function EmptyChat() {
  
  const Image=styled('img')({
    width:'102%',
  })
  
  return (
<Box>
<Box>
  <Image src={emptyChatImage}></Image>
  <Typography>WhatsApp Web</Typography>
  <Typography>Now send and receive messages without keeping your phone online</Typography>
  <Typography>Use WhatsApp on 4 Linked devices and 1 Phone at the same time.</Typography>
</Box>
</Box>
    )
}
