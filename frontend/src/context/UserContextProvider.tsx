import UserContext from "./UserContext";
import { useState } from "react";

const UserContexProvider=({children}:any)=>{
    const [isLoggedIn,setIsLoggedIn]=useState<Boolean>(false)
    const [user,setUser]=useState<string>('')


    return(
        <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContexProvider