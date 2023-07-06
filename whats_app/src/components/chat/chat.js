import { Dialog, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Menu from './menu/menu'
import EmptyChat from './chat/EmptyChat'
export default function Chat() {

    const dialog_style = {
        height: '100%',
        marginTop: '6%',
        width: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        borderRadius: '0'
    }

    const Component = styled(Box)`
display:flex;
`
const LeftComponent=styled(Box)`
min-Width:400px;

`
const RightComponent=styled(Box)`
min-Width:300px;
border-left:1px solid rgba(0,0,0,0.2);
width:70%
`
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialog_style }}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Component>
        </Dialog>
    )
}
