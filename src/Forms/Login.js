import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('api/v1/login', {
        method: 'POST',
        body: JSON.stringify({ username, email }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok) {
        console.log(`${username} - Logged in successfully`);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <p>Name:</p>
        <input type="text" id="username" value={username} onChange={handleChangeUsername} />
      </label>
      <label htmlFor="email">
        <p>Email:</p>
        <input type="text" id="email" value={email} onChange={handleChangeEmail} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
