import styled from '@emotion/styled'
import { SearchSharp } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import React from 'react'


export default
  function Search() {


  const Component = styled(Box)`
background:#fff;
border-bottom:2px solid #F2F2F2;
height:45px;
display:flex;
align-items:center;
`

const Wrapper=styled(Box)`

background:#f0f2f5;
position:relative;
width:100%;
margin:0px 13px;
border-radius:12px;

`
  
const Icon = styled(Box)`
color:#919191;
position:absolute;
padding:10px
`
const InputField=styled(InputBase)`

width:100%;
height:32px;
padding:18px;
padding-left:70px
`
  return (
    <Component>
      <Wrapper>
      <Icon>
          <SearchSharp />
        </Icon>
        <InputField
          placeholder='Search or Start new Chat'
        />
      </Wrapper>
    </Component>
  )
}
