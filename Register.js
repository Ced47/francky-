import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css'
const ENDPOINT = 'http://localhost:8000';

function SignUp() {
  const [nickname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${ENDPOINT}/backend/auth/signup `, { nickname, email, password });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={nickname}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <div class="btn">
            <button type="submit">Sign Up</button>
      </div>
    </div>
  );
}


export default SignUp;


