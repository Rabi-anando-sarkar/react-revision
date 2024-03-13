import UserContext from "./UserContext.js";
import React from "react";

const UserContextProvider = ({children}) => {
    const user = "Rabi Anando Sarkar" //koi api bhi call karlo
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider