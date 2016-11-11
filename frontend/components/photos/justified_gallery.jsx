import React from 'react';
import {Link} from 'react-router';
import { values } from 'lodash';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.justify;
    this.componentDidUpdate = this.justify;
    this.limit = 30;
    this.justified = false;
    if(this.props.requestPhotos) this.enableInfiniteScroll();
  }

  enableInfiniteScroll(){
    this.scrollHandler = () => {
      const fetchHeight = $(document).height() - 400;
      const actualHeight = $(window).scrollTop() + $(window).height();
      if(actualHeight >= fetchHeight && actualHeight <= fetchHeight + 60) {
        this.props.requestPhotos(this.limit, this.props.photos.length);
      }
      console.log("in callback");
    };

    $(window).on('scroll', this.scrollHandler);
  }

  componentWillUnmount(){
    $(window).off("scroll", this.scrollHandler);
  }

  justify(){
    if(this.props.requestPhotos){
      if(this.justified){
        $('#gallery').justifiedGallery('norewind');
      } else {
        this.justified = true;
        $("#gallery").justifiedGallery({
          rowHeight: this.props.rowHeight,
          margins: 5
        });
      }
    } else {
      $("#gallery").justifiedGallery({
        rowHeight: this.props.rowHeight,
        margins: 5
      });
    }
  }

  setDisplay(){
    return this.props.klass ? 'block' : 'none';
  }

  remove(photoId){
    this.props.dropPhoto(photoId, this.props.albumId);
  }

  render(){
    // debugger;
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
                    {photo.commentCount}
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
