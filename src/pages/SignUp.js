import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// post request naar de backend versturen (met ingevulde gegevens) Dan krijg je een token en die geven we aan Context.
function SignUp() {
    const [registerSucces, setRegisterSucces] = useState(false);
    const [formData, setFormData] = useState({
        username: 'pietpieters',
        email: 'pietpieters@novi.nl',
        password: '123456',
    })

    const {username, email, password} = formData;
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    async function onSubmit(){
        try {
            const response = await axios.post('http://localhost:3000/register',
                {
                email,
                password,
                username,
        });
            console.log(response);
            setRegisterSucces(true);
        }
        catch(e) {
            console.error(e)
        }
    }
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="gebruikersnaam"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
              type="email"
              placeholder="E-mailadres"
              name="email"
              value={email}
              onChange={handleChange}
              />
          <input
            type="password"
            placeholder="Wachtwoord"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <p>
          <button type="submit" onClick={onSubmit}>
              registreer hier
          </button>

        </p>
              <p>
          {registerSucces && <p className="succes"> Gebruiker is succesvol aangemaakt</p>}
                  Heb je al een account? Je kunt je <Link to="/Signin">hier</Link> inloggen.</p>
      </form>

    </>
  );
}

export default SignUp;