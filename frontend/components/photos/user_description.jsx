import React from 'react';
import {Link} from 'react-router';
import CommentContainer from './comments/comment_container';

export default class UserDescription extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='user-section'>
        <div className='main-info-container'>
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
            <span>{this.props.photo.description}</span>
          </div>
        </div>
        <div className='favorites'>
          Favorites will go here
        </div>
        <CommentContainer />
      </section>
    );
  }
}
