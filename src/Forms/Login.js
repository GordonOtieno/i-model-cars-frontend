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
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('useremail', JSON.stringify(email));
    console.log('Logged in successfully!');
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
