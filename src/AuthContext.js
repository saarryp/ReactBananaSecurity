import React, {createContext} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = React.useState(
        {isAuthenticated: false,
                    user: null,
        });
    const history = useHistory();

    // pakt UseNavigate niet, krijg error

    function login() {
        // we krijgen een token aangeleverd uit backend (dit is wat de context gaat doen)
        // token in de local storage plaatsen
        console.log('Gebruiker is ingelogd!')
        // informatie in de state plaatsen
        // authetification op true zetten
        setIsAuth({
            isAuthenticated: true,
            user: {
                username: 'AdrieSpek',
                    email:'spek@gmail.com'
            }
        });
        history.push('/profile')
    };
    function logout() {
        // token uit lokale storage verwijderen
        console.log('Gebruiker is uitgelogd.')
        // de gebruikersgegevens uit de state verwijderen
        // de authentificatie op False zetten
        setIsAuth({
            isAuthenticated: false,
            user: null,
        });
        history.push('/');
    };
        //state weerin de contextdata wordt geplaatst}

    const contextData ={
        ...isAuth,
        LoginFunction: login,
        logOutFunction: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

