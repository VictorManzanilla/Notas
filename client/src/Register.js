import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const Register = () => {

    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({username, password}, 'FOIFAEFNA')
        const res = await axios
        .post(`${process.env.REACT_APP_API}/register`,
        {username, password},
        { headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.data
    if(data.status === 'ok') {
        history.push('/')
    }
    }

    return (
        <div> 
          <h1>Register</h1>
     
          <form onSubmit={handleSubmit}>
           
           <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            />
            <br/>
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            />
            <br/>
            <input type="submit" value="Register"/>
          </form>
        </div>
       );

}

export default Register;