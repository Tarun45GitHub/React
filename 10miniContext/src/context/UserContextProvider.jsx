import React, { useState } from "react";
import userContext from "./UserContext.js";

export const UserContextProvider=({children})=>{
    const [user,setUser]=useState({})
    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}