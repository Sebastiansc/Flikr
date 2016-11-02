import React from 'react';

export default class SearchBox extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <form className='search-box'>
        <input type='submit' value="S"></input>
        <input type='text' placeholder='Search photos, people...'></input>
      </form>
    );
  }
}
