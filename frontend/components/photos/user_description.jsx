import React from 'react';
import {Link} from 'react-router';
import {values} from 'lodash';
import CommentContainer from './comments/comment_container';

export default class UserDescription extends React.Component{
  constructor(props){
    super(props);
  }

  getFans(){
    this.mainFavs = values(this.props.photo.favorites).slice(0,2);
    return this.mainFavs.map((favorite,i) => {
      const comma = i === 0 && this.mainFavs.length === 2 ? ',' : '';
      return (
        <span key={i} className='fav-fans'>
          <i className="fa fa-heart" aria-hidden="true"></i>
          {favorite.username}{comma}
        </span>
      );
    });
  }

  showOthers(){
    const otherFans = values(this.props.photo.favorites).length - 2;
    if(otherFans > 0){
      return `${otherFans} more people faved this`;
    } else {
      return this.mainFavs.length > 0 ?  'faved this' : 'No favorites yet';
    }
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
          <i className='fa fa-star mini-star' aria-hidden={true}></i>
          <span>{this.getFans()} {this.showOthers()}</span>
        </div>

        <CommentContainer />
      </section>
    );
  }
}
