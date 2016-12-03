import React from 'react';
import {Link} from 'react-router';
import { values } from 'lodash';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.justify;
    this.componentDidUpdate = this.justify;
    // this.infinite = this.enableInfiniteScroll();
  }

  enableInfiniteScroll(){
    $(window).scroll(() => {
      if(this.props.requestPhotos){
        if($(window).scrollTop() + $(window).height() === $(document).height())
        {
          this.props.requestPhotos(20, 20);
        }
      }
    });
  }

  justify(){
    $("#gallery").justifiedGallery({
      rowHeight: this.props.rowHeight,
      margins: 5
    });
  }

  setDisplay(){
    return this.props.klass ? 'block' : 'none';
  }

  remove(photoId){
    this.props.dropPhoto(photoId, this.props.albumId);
  }

  render(){
    return(
      <div id="gallery">
        {this.props.photos.map(photo => (
          <div className='justified-gallery-item'
            key={photo.id}>
            <img alt={photo.title} src={photo.feed_url}/>

            <Link to={`home/photos/${photo.id}`}
                  className='justified-gallery-item-link'/>

            <i aria-hidden="true"
               style={{display: `${this.setDisplay()}`}}
               className={`fa fa-trash-o ${this.props.klass}`}
               onClick={() => this.remove(photo.id)}>
            </i>

              <div className='caption' id='caption-patch'>
                <div className="explore-item-text">
                  <Link to={`home/photos/${photo.id}`}
                        className='explore-item-title'>
                    {photo.title}
                  </Link>
                  <Link to={`home/profile/${photo.author.id}`}
                        className='explore-item-owner'>
                    by {photo.author.username}
                  </Link>
                </div>
                <div className='photo-interactions'>
                  <div className='explore-item-tool'>
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                    15
                  </div>
                  <div className='explore-item-tool'>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    {values(photo.favorites).length}
                  </div>
                </div>
              </div>

          </div>
        ))}
      </div>
    );
  }
}
