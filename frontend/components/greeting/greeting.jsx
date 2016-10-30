import React from 'react';
import { Link } from 'react-router';

const Greeting = ({username, logout, login}) => {
  if (username){
    return (
      <div>
        <h1>Welcome {username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Login</Link>
        <br/>
        <a onClick={ () => login({username: "guest", password: "password"})}>
          Guest Login
        </a>
      </div>
    );
  }
};


export default Greeting;
