import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        // Retrieve user data from localStorage when the component mounts
        const savedUser = localStorage.getItem('user');
        return savedUser? JSON.parse(savedUser) : null;
    })
    useEffect(() => {
        // Save user data to localStorage when the component unmounts
        if(user) {
            localStorage.setItem('user', JSON.stringify(user))
        }else {
            localStorage.removeItem('user')
        }
    
    }, [user])
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider