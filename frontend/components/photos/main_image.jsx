import React from 'react';
import ImageStream from './image_stream';
import { withRouter, Link } from 'react-router';
import PhotoArrowNav from './arrow';

class MainImage extends React.Component{
  constructor(props){
    super(props);
    this.componentWillMount = this.componentWillReceiveProps = this.findIndex;
  }

  changePhoto(id){
    this.router.push(`home/photos/${id}`);
  }

  findIndex(props = this.props){
    this.image_index = this.currentIndex(props);
  }

  fullSize(){
    const slicePath = this.pathArray().slice(2, this.pathArray().length - 1).join('/');
    this.props.router.push(`/lightbox/${slicePath}/${this.props.photo.id}`);
  }

  currentIndex(props){
    for (let i = 0; i < props.photos.length; i++) {
      if(props.photos[i].id === props.photo.id){
        return i;
      }
    }
  }

  pathArray(){
    return this.props.router.location.pathname.split('/');
  }

  linkRoot(){
    const path = this.pathArray();
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
          index={this.image_index}
          photos={this.props.photos}
          offset={1}
          arrow='fa fa-angle-right fa-2x'/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root={this.linkRoot()}
          index={this.image_index}
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
