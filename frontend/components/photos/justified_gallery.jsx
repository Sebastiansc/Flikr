import React from 'react';
import {Link} from 'react-router';
import { values } from 'lodash';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidUpdate = this.justify;
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

  link(photo){
    return this.props.link + photo.id;
  }


  render(){
    if (!this.props.photos) return (
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    );
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
                    {photo.comments}
                  </div>
                  <div className='explore-item-tool'>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    {photo.favorites}
                  </div>
                </div>
              </div>

          </div>
        ))}
      </div>
    );
  }
}
