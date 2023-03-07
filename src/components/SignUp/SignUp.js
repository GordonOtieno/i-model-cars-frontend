import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../redux/users/usersSlice';
import './SignUp.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUseremailChange = (e) => {
    setUseremail(e.target.value);
  };

  const createUserAPI = async (username, useremail) => fetch('http://127.0.0.1:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: username, email: useremail }),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return false;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (username.trim() === '') {
    //   alert('Please enter a valid username.');
    //   return;
    // }
    createUserAPI(username, useremail).then((userdata) => {
      if (userdata !== false) {
        dispatch(signUpUser({ data: userdata, isLogged: true }));
        localStorage.setItem('user', JSON.stringify(userdata));
        window.location.href = '/';
      }
    });
  };

  return (
    <>
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
        <label htmlFor="useremail">
          Email
          <input
            type="text"
            id="useremail"
            value={useremail}
            onChange={handleUseremailChange}
          />
        </label>
        <button type="submit" className="submit-btn">
          Sign up
        </button>
        <br />
        <span><i>Already have an account?</i></span>
        <Link to="/signin"> Log in here</Link>
      </form>
    </>
  );
};

export default SignUpForm;
