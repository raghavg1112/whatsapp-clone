import React from 'react'
import { Box, Typography, styled } from '@mui/material'
export default function Conversations({ users }) {
    const Component = styled(Box)`
    display:flex;
    `

    return (

        <>
            <Component>
                <Box>
                    hello
                    <img src={users.picture}></img>
                </Box>
                <Box>
                    <Box>
                        <Typography>{users.name}</Typography>
                    </Box>
                </Box>
            </Component>
        </>
    )
}
