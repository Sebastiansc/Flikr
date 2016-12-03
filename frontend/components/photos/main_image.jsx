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

  linkRoot(){
    const path = this.props.router.location.pathname.split('/');
    return(
      path.slice(0, path.length - 1).join('/')
    );
  }

  render(){
    return (
      <div className='main-image-container'>
        <Link className='back-link' to={window.path_history[0]}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Go back
        </Link>
        <i onClick={() => this.fullSize()}
          className="expand fa fa-expand" aria-hidden="true"></i>
        <div className='main-image'>
          <img key={this.props.photo.id}
               src={this.props.photo.show_url}>
          </img>
        </div>

        <PhotoArrowNav klass='photo-nav-r-big'
          root={this.linkRoot()}
          index={this.image_queue}
          photos={this.props.photos}
          offset={1}
          arrow='fa fa-angle-right fa-2x'/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root={this.linkRoot()}
          index={this.image_queue}
          photos={this.props.photos}
          offset={-1}
          arrow='fa fa-angle-right fa-rotate-180 fa-2x'/>

        <ImageStream photos={this.props.photos} current={this.props.photo.id}
        root={this.linkRoot()}/>
      </div>
    );
  }
}

export default withRouter(MainImage);
