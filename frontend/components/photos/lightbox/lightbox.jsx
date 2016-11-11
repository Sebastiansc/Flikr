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

  load(){
    switch (this.props.fetch) {
      case 'explore':
        this.props.fetchInBatch(this.props.photo.id);
        break;
      case 'favorites':
        this.props.fetchFavorites(this.props.person.id);
        break;
      default:
        this.props.getUser(this.props.person.id);
        break;
    }
  }

  photoLink(photoId){
    if (this.props.explore){
      return `home/explore/photos/${photoId}`;
    } else if (this.props.favorites){
      return `home/favorites/photos/${photoId}`;
    } else {
      return `home/user/photos/${photoId}`;
    }
  }

  componentWillMount(){
    if(this.props.photos.length === 0) this.props.requestPhotos();
  }

  componentWillUpdate(){
    this.image_queue = this.currentIndex();
  }

  render(){
    return(
      <div className='lightbox-container'>
        <LightBoxHeader author={this.props.photo.author}
          id={this.props.photo.id}
          path={this.props.path}/>
        <div className='lightbox-image'>
          <img src={this.props.photo.img_url}></img>
        </div>
        <PhotoArrowNav klass='photo-nav-r-big'
          root={this.props.path}
          index={this.image_queue}
          photos={this.props.photos}
          offset={1}
          arrow='fa fa-angle-right'
          load={() => this.load()}/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root={this.props.path}
          index={this.image_queue}
          photos={this.props.photos}
          offset={-1}
          arrow='fa fa-angle-right fa-rotate-180'/>
      </div>
    );
  }
}
