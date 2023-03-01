import React, { useState, useEffect } from 'react';
import './SignUp.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedUsername && storedEmail) {
      setUsername(storedUsername);
      setEmail(storedEmail);
    }
  }, []);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
    </form>
  );
};

export default SignUpForm;
