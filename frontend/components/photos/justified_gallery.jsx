import React from 'react';
import {Link} from 'react-router';
import { values } from 'lodash';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidUpdate = this.justify;
    this.componentWillUnmount = this.disableInfiniteScroll;
  }

  componentWillMount(){
    if (this.props.scroll){
      this.justified = false;
      this.init = false;
      this.enableInfiniteScroll();
    }
  }

  disableInfiniteScroll(){
    $(window).off('scroll', this.infinite);
  }

  componentWillReceiveProps(newProps){
    if (newProps.photos.length % 80 !== 0){
      this.offset = this.limit = 0;
      this.disableInfiniteScroll();
    } else if (!this.init){
      this.offset = newProps.photos.length;
      this.limit = 80;
      this.init = true;
    }
  }

  enableInfiniteScroll(){
    this.infinite = () => {
      if($(window).scrollTop() + $(window).height() === $(document).height()){
        this.props.requestPhotos(this.offset, this.limit);
        this.offset += 80;
      }
    };

    $(window).scroll(this.infinite);
  }

  justify(){
    if (this.justified){
      $("#gallery").justifiedGallery('norewind');
    } else {
      this.justified = true;
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

  link(photo){
    if (this.props.scroll && this.limit > 0){
      return `${this.props.link}${photo.id}/${this.offset}/${this.limit}`;
    } else {
      return this.props.link + photo.id;
    }
  }

  render(){
    return(
      <div id="gallery">
        {this.props.photos.map(photo => (
          <div className='justified-gallery-item'
            key={photo.id}>
            <img alt={photo.title} src={photo.feed_url}/>

            <Link to={this.link(photo)}
                  className='justified-gallery-item-link'/>

            <i aria-hidden="true"
               style={{display: `${this.setDisplay()}`}}
               className={`fa fa-trash-o ${this.props.klass}`}
               onClick={() => this.remove(photo.id)}>
            </i>

              <div className='caption' id='caption-patch'>
                <div className="explore-item-text">
                  <Link to={this.link(photo)}
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
