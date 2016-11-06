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
          id={this.props.photo.id}/>
        <div className='lightbox-image'>
          <img src={this.props.photo.img_url}></img>
        </div>
        <PhotoArrowNav klass='photo-nav-r-big'
          root='lightbox'
          index={this.image_queue}
          photos={this.props.photos}
          offset={1}
          arrow='fa fa-angle-right'/>
        <PhotoArrowNav klass='photo-nav-l-big'
          root='lightbox'
          index={this.image_queue}
          photos={this.props.photos}
          offset={-1}
          arrow='fa fa-angle-right fa-rotate-180'/>
      </div>
    );
  }
}

//
// photos = [1,2,3,4,5,6,7]
// image_queue = [4]
// clicks next
// image_queue[0] = image_queue.pop + 1
// this.props.router.push(`lightbox/${photos[image_queue[0+1].id]}`)
//
// Option 1
// Component receives photos array in props and also receives currentPhoto being displayed
// const current_index = this.props.photos.filter(photo => photo.id === currentPhoto.id)
// store this.state = {image_queue: current_index}
//
//
// Behavior needs to be shared with photo_detail component:
//   Break functionality into <RightArrow /> <LeftArrow />
