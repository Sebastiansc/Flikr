import React from 'react';
import ImageStream from './image_stream';
import { withRouter } from 'react-router';

class MainImage extends React.Component{
  constructor(props){
    super(props);
  }

  changePhoto(id){
    this.router.push(`home/photos/${id}`);
  }

  render(){
    return (
      <div className='main-image-container'>
        <a className="main-image-floater">Back to Explore</a>
        <span className="main-image-floater">Expand</span>
        <div className='main-image'>
          <img key={this.props.photo.id}
               src={this.props.photo.img_url}>
          </img>
        </div>
        <ImageStream photos={this.props.photos} current={this.props.photo.id}/>
      </div>
    );
  }
}

export default withRouter(MainImage);
