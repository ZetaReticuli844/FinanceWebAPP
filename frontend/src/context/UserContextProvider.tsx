import UserContext from "./UserContext";
import { useState } from "react";

const UserContexProvider=({children}:any)=>{
    const [isLoggedIn,setIsLoggedIn]=useState<Boolean>(false)
    const [user,setUser]=useState()
    const [incomes,setIncomes]=useState([])
    const [expenses,setExpenses]=useState([])


    return(
        <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser,incomes,setIncomes,expenses,setExpenses}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContexProvider