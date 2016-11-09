import React from 'react';
import {Link} from 'react-router';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.justify;
    this.componentDidUpdate = this.justify;
  }

  justify(){
    $("#gallery").justifiedGallery({
      rowHeight: this.props.rowHeight,
      margins: 5
    });
  }

  render(){
    return(
      <div id="gallery">
        {this.props.photos.map(photo => (
          <Link className='justified-gallery-item'
            key={photo.id} to={`home/photos/${photo.id}`}>
            <img alt={photo.title} src={photo.feed_url}/>

              <div className='caption' id='caption-patch'>
                <div className="explore-item-text">
                  <span className='explore-item-title'>
                    {photo.title}
                  </span>
                  <span className='explore-item-owner'>
                    by {photo.author.username}
                  </span>
                </div>
                <div className='explore-item-tool'></div>
                <div className='explore-item-tool'></div>
              </div>

          </Link>
        ))}
      </div>
    );
  }
}
