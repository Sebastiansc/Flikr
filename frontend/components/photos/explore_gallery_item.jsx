import React from 'react';
import { withRouter } from 'react-router';

export default class ExploreGalleryItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='explore-item'>
        <figure>
          <img>{this.props.photo.image_url}</img>
        </figure>
        <div className='explore-item-bottom'>
          <div className='explore-item-text'>
            {this.props.photo.title}
          </div>
          <div className='explore-item-tool'></div>
          <div className='explore-item-tool'></div>
        </div>
      </div>
    );
  }
}
