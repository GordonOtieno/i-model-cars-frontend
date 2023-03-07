import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/users/usersSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const isUserLogged = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    if (user !== null) {
      window.location.href = '/';
    }
  };

  useEffect(isUserLogged, []);

  const isUserExistInApi = async (username) => fetch(`http://127.0.0.1:3000/api/v1/users/${username}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return false;
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    isUserExistInApi(username).then((data) => {
      if (data === false) {
        alert('user does not exist! Please Sign up.');
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(loginUser({ data: username, isLogged: true }));
        window.location.href = '/';
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <label htmlFor="username">
        <p>Name:</p>
        <input type="text" id="username" value={username} onChange={handleChangeUsername} />
      </label>
      <br />
      <button type="submit" className="submit-btn">Login</button>
      <br />
      <span><i>Don&apos;t have an account?</i></span>
      <Link to="/signup">Sign up here</Link>
    </form>
  );
};

export default Login;
