import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){

    const {user} =useContext(UserContext)
    if(user!=null)
    return(
        <div>
            <h2>Profile</h2>
            <div>welcome {user.username}</div>
        </div>
    )
    else return (<div>
         <h2>Profile</h2>
        please set user
    </div>)
}

export default Profile;