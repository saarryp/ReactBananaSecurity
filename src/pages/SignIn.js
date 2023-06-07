import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../AuthContext";
import signUp from "./SignUp";

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
        <button onClick={handleLogin}></button>
        <button onClick={handleLogout}></button>
      <form>
        <p>*invoervelden*</p>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;