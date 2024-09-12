import React, { createContext, useContext, useState } from 'react';
import Cookies from "js-cookie";

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatifyApp");

    //parse .... Correct the typo here from setAurhUser to setAuthUser
    const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined
    );


    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth=()=> useContext(AuthContext);
