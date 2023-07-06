import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../services/api';
import Conversations from './conversations';
export default function Conversation() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();
            console.log(response)
            setUsers(response);
        }
    }, [])
    return (
        <>
            {users.map((user) => {
                <Conversations users={user} />
            })}
        </>
    )
}
