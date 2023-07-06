import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import styled from '@emotion/styled'
export default function Profile() {
    const { account } = useContext(AccountContext)

    const ImageBox = styled(Box)`
  width:100%;
  display:flex;
  justify-content:center;
  padding:15px
  `


    const Image = styled('img')({
        width: 200,
        height: 200,
        borderRadius: '50%',

    })


    const BodyWrapper = styled(Box)`
  background:#ffffff;
  padding:15px;
  &:first-child{
    color:#009688;
    font-weight:200;
    font-size:13px;
  }
  &:last-child{
    color:#4A4A4A;
    margin:14px 0px;
  }
  `
const DescriptionContainer=styled(Typography)`
font-size:13px;
color:#8696a0;
padding:18px 13px;
`

    return (
        <>
            <ImageBox>
                <Image src={account.picture}></Image>
            </ImageBox>
            <BodyWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BodyWrapper>
            <Box>
                <DescriptionContainer>This is not your Username or Pin. This name will be visible to your whats app contacts.</DescriptionContainer>
            </Box>
            <BodyWrapper>
                <Typography>About</Typography>
                <Typography>Eat!Sleep!Code!Repeat!</Typography>
            </BodyWrapper>
        </>
    )
}
