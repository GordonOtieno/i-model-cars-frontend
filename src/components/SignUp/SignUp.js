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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${username}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default SignUpForm;
