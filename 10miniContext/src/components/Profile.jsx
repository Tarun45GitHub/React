import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(userContext)
    return (
        <>
        <h2>welcome</h2>
        <p>username : {user.username}</p>
        </>
    )
}

export default Profile
