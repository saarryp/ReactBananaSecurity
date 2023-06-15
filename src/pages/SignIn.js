import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../AuthContext";
import axios from "axios";



function SignIn() {
        const {signin, signout} = useContext(AuthContext);
        const handleLogin = () => {
           signin()
        }
        const handleLogout = () => {
          signout()
        }
async function logUserIn(e) {
    try {
        const result = await axios.post('http://localhost:3000/login',
            {
                email: '',
                password: '',
            });
        console.log(result.data);
        } catch (error) {console.error(e);
        }
    }
//                 roep de Loginfunctie van de context aan zodat de rest geregeld kan worden

  //       postrequest om de ingevulde gegevens naar backend te sturen doen we hier. Dan krijgen we een token en die geven we aan de Context
  return (
    <>
        <h1>Inloggen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleLogin}>

            <p>*invoervelden*</p>
            <button type="submit" onClick={logUserIn}>Inloggen</button>
            <button type="button" onClick={handleLogout}>uitloggen</button>
        </form>
        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;


