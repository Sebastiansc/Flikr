import React from 'react';
import { Link } from 'react-router';

export default class ExploreGalleryItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <figure className='explore-thumb'>
        <img src={this.props.photo.img_url}></img>

        <div className='explore-item-bottom'>
          <div className="explore-item-text">
            <Link to='' className='explore-item-title'>
              {this.props.photo.title}
            </Link>
            <Link to='' className='explore-item-owner'>
              by {this.props.photo.username}
            </Link>
          </div>

          <div className='explore-item-tool'></div>
          <div className='explore-item-tool'></div>
        </div>
      </figure>
    );
  }
}
