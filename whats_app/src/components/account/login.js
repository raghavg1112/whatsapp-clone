import React from 'react'
import { Dialog, Box, List, ListItem, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { addUser } from '../../services/api'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google'
import { useContext } from 'react'
import {AccountContext} from '../../context/AccountProvider'
import jwt_decode from 'jwt-decode'

export default function Login() {
    const dialog_style = {
        height: '96%',
        marginTop: '12%',
        width: '60%',
        maxHeight: '100%',
        maxWidth: '100%'
    }
    const Component = styled(Box)` 
    display:flex
    `

    const Container = styled(Box)`
    padding:4% 4% 2% 4%
    `

    const Tittle=styled(Typography)`
    font-size:26px;
    font-weight:300;
    color:#525252;
    font-family:inherit;
    margin-bottom:25px
    `

    const Qrcode=styled('img')({
        height:'264px',
        width:'264px',
        margin:'8% 0 4% 2%'
    })
    
    const {setAccount}=useContext(AccountContext)

    const loginSuccess=async(res)=>{
     const decode=jwt_decode(res.credential);
    setAccount(decode);
    await addUser(decode);
    }
    const loginError=()=>{

    }
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialog_style }}
        >
            <Component>
                <Container>
                    <Tittle>To use WhatsApp on your computer:</Tittle>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2.Tap Menu or Settings and select WhatsApp Web</ListItem>
                        <ListItem>3.Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Container>

                <Box style={{position:'relative'}}>
                    <Qrcode src={qrCodeImage} alt='Qr Code'></Qrcode>
                    <Box style={{position:'absolute',top:'45%',transform:'translatex(5%)',width:'94%'}}>
                        <GoogleLogin
                        onSuccess={loginSuccess}
                        onError={loginError}
                        ></GoogleLogin>
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
