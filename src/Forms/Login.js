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
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || user !== username) {
        alert(`User ${username} not found`);
        window.location.href = '/SingUp';
      } else {
        const response = await fetch(`api/v1/users/${username}`);
        const data = await response.json();
        if (data.ok) {
          alert(`${username} - Logged in successfully`);
          localStorage.setItem('user', JSON.stringify(username));
        }
      }
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <label htmlFor="username">
        <p>Name:</p>
        <input type="text" id="username" value={username} onChange={handleChangeUsername} />
      </label>
      <br />
      <label htmlFor="email">
        <p>Email:</p>
        <input type="text" id="email" value={email} onChange={handleChangeEmail} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
