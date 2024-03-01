import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const {username}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then((res)=>(res.json()))
            .then((res)=>{setData(res)})
    },[username])
    // const avatarUrl= res.avatar_url
    //             const name=res.name
    //             const Bio=res.Bio
    //             const followers=res.followers
    
    return (
        <>
        <div className='flex justify-center m-10'>
            <img src={data.avatar_url} alt="" />
            <div className='flex justify-center align-middle flex-col m-10'>
                <h1> Name: {data.name}</h1>
                <h2> No of Follwers : {data.followers}</h2>
                <h5> Bio: {data.bio}</h5>
            </div>
        </div>
        </>
    )
}

export default Github
