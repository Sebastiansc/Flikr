import React from 'react';
import {Link} from 'react-router';

export default class UserDescription extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='user-section'>
        <div className='main-info-container'>
          <span>{this.props.photo.description}</span>
          <Link to={`home/profile/${this.props.photo.author_id}`}>
            <div className='u-section-avatar'>
              <img src={`${this.props.author.image_url}`}></img>
            </div>
          </Link>
          <div className='info'>
            <Link to={`home/profile/${this.props.photo.author_id}`}>
              {this.props.author.username}
            </Link>
            <h1>{this.props.photo.title}</h1>
          </div>
        </div>
        <p>Comments will go here</p>
      </section>
    );
  }
}
