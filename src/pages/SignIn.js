import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../AuthContext";


function SignIn() {
        const {signin, signout} = useContext(AuthContext);
        const handleLogin = () => {
           signin()
        };

        const handleLogout = () => {
            signout()
        }
  return (
    <>
        <h1>Inloggen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleLogin}>

            <p>*invoervelden*</p>
            <button type="submit"onClick={handleLogin}>Inloggen</button>
        </form>
        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;


// <button onClick={handleLogout}>LogOut</button>