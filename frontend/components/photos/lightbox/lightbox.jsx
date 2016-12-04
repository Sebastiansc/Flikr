import React from 'react';
import LightBoxHeader from './lightbox_header';
import PhotoArrowNav from '../arrow.jsx';

export default class LightBox extends React.Component{
  constructor(props){
    super(props);
    this.image_queue = 1;
  }

  currentIndex(){
    for (let i = 0; i < this.props.photos.length; i++) {
      if(this.props.photos[i].id === this.props.photo.id){
        return i;
      }
    }
  }

  componentWillUpdate(){
    this.image_queue = this.currentIndex();
  }

  linkRoot(){
    const path = this.props.router.location.pathname.split('/');
    return(
      path.slice(0, path.length - 1).join('/')
    );
  }

  minimizeRoot(){
    const path = this.props.router.location.pathname.split('/');
    return `/home/${path.slice(2, path.length - 1).join('/')}`;
  }

  render(){
    if(!this.props.photo) return <div></div>;

    return(
      <div className='lightbox-container'>
        <LightBoxHeader author={this.props.photo.author}
          photoId={this.props.photo.id}
          root={this.minimizeRoot()}/>
        <div className='lightbox-image'>
          <img src={this.props.photo.img_url}></img>
        </div>
        <PhotoArrowNav klass='photo-nav-r-big'
          root={this.linkRoot()}
          index={this.image_queue}
          photos={this.props.photos}
          offset={1}
          arrow='fa fa-angle-right'/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root={this.linkRoot()}
          index={this.image_queue}
          photos={this.props.photos}
          offset={-1}
          arrow='fa fa-angle-right fa-rotate-180'/>
      </div>
    );
  }
}
