import React, { createContext } from 'react'
import { useState } from 'react'

export const AccountContext = createContext(null);


export default function AccountProvider({ children }) {
   
    const [account, setAccount] = useState('');
   
    return (
        <AccountContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}
