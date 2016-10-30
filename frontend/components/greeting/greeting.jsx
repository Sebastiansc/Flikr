import React from 'react';
import { Link } from 'react-router';

const Greeting = ({username, logout}) => {
  debugger;
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
        <Link to='/login'>Sign In</Link>
      </div>
    );
  }
};


export default Greeting;
