import React from 'react';
import ImageStream from './image_stream';
import { withRouter, Link } from 'react-router';
import PhotoArrowNav from './arrow';

class MainImage extends React.Component{
  constructor(props){
    super(props);
    this.image_queue = 1;
  }

  changePhoto(id){
    this.router.push(`home/photos/${id}`);
  }

  fullSize(){
    this.props.router.push(`lightbox/${this.props.photo.id}`);
  }

  componentWillUpdate(newProps){
    this.image_queue = this.currentIndex(newProps);
  }

  currentIndex(newProps){
    for (let i = 0; i < newProps.photos.length; i++) {
      if(newProps.photos[i].id === newProps.photo.id){
        return i;
      }
    }
  }

  render(){
    return (
      <div className='main-image-container'>
        <Link className='back-link' to={path_history[0]}>
          Go back
        </Link>
        <span className='expand'
              onClick={() => this.fullSize()}>Expand</span>
        <div className='main-image'>
          <img key={this.props.photo.id}
               src={this.props.photo.show_url}>
          </img>
        </div>

        <PhotoArrowNav klass='photo-nav-r-big'
          root='home/photos'
          index={this.image_queue}
          photos={this.props.photos}
          offset={1}
          arrow='>'
          code={39}/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root='home/photos'
          index={this.image_queue}
          photos={this.props.photos}
          offset={-1}
          arrow='<'
          code={37}/>

        <ImageStream photos={this.props.photos} current={this.props.photo.id}/>
      </div>
    );
  }
}

export default withRouter(MainImage);
