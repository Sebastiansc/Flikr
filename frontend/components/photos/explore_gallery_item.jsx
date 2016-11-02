import React from 'react';
import { withRouter } from 'react-router';

export default class ExploreGalleryItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <figure className='explore-thumb'>
        <img style={{
            height: (this.props.photo.height / 4),
             width: (this.props.photo.width / 4)}}
          src={this.props.photo.img_url}></img>
        <div className='explore-item-bottom'>
          <span className='explore-item-title'>
            {this.props.photo.title}
          </span>

          <span> by {this.props.photo.username}</span>
          <div className='explore-item-tool'></div>
          <div className='explore-item-tool'></div>
        </div>
      </figure>
    );
  }
}
