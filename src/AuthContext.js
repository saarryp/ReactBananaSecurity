import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const login = () => {
        setIsAuthenticated(true);
        console.log("Gebruiker is ingelogd!")
    };
    const logout = () => {
        setIsAuthenticated(false);
        console.log("Gebruiker is uitgelogd.")
    };
        //state weerin de contextdata wordt geplaatst}

    const contextData ={
        signin: login,
        signout: logout,
        isAuth: isAuthenticated
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

