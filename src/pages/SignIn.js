import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../AuthContext";
import axios from "axios";



function SignIn() {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, toggleError] = useState(false);
        const {login} = useContext(AuthContext);

        // const handleLogin = () => {
        //    signin()
        // }
        // const handleLogout = () => {
        //   signout()
        // }
async function handleSubmit(e) {
    e.preventDefault();
    toggleError(false);

    try {
        const result = await axios.post('http://localhost:3000/login',
            {
                email: email,
                password: password,
            });
        // console.log(result.data);
        // login(result.data.accessToken);
        handleSubmit(result.data.accessToken)

        } catch (error) {
        console.error(e);
        toggleError(true)
        }
    }
//  roep de Loginfunctie van de context aan zodat de rest geregeld kan worden

  //       postrequest om de ingevulde gegevens naar backend te sturen doen we hier. Dan krijgen we een token en die geven we aan de Context
  return (
    <>
        <h1>Inloggen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email-field">
                emailadres:
                <input
                    type="email"
                    id= "email-field"
                    name="email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
            </label>
            <label htmlFor="password-field">Wachtwoord
                <input
                    type="password"
                    id="password-field"
                    name= "password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
            />
            </label>
            {error && <p className="error"> combi van email en wachtwoord is onjuist</p> }


            <button type="submit" onClick={handleSubmit}>Inloggen</button>

        </form>
        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;


