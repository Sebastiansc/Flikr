import React from 'react';

export default class SearchBox extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <form className='search-box'>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text' placeholder='Search photos, people...'></input>
      </form>
    );
  }
}
