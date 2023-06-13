import React, {createContext} from 'react';
import {useHistory} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const history = useHistory();
    const login = () => {
        setIsAuthenticated(true);
        console.log("Gebruiker is ingelogd!")
        history.push('/profile')
    };
    const logout = () => {
        setIsAuthenticated(false);
        console.log("Gebruiker is uitgelogd.")
        history.push('/');
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

