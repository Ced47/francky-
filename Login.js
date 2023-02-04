import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'

const ENDPOINT = 'http://localhost:8000';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${ENDPOINT}/backend/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/chat');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;