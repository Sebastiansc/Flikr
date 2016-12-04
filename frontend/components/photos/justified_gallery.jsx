import React from 'react';
import {Link} from 'react-router';
import { values } from 'lodash';

export default class JustifiedGallery extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidUpdate = this.justify;
    this.componentWillUnmount = this.disableInfiniteScroll;
    this.state = { fetching: false };
  }

  componentWillMount(){
    if (this.props.scroll){
      this.justified = false;
      this.init = false;
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.photos.length % 50 !== 0){
      this.offset = this.limit = 0;
      this.over = true;
    } else if (!this.init){
      this.offset = newProps.photos.length;
      this.limit = 50;
      this.init = true;
    }
    this.setState({ fetching: false });
  }

  fetchMore(){
    if (!this.over){
      this.setState({ fetching: true });
      this.props.requestPhotos(this.offset, this.limit);
      this.offset += 50;
    }
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
    return this.props.link + photo.id;
  }

  showMore(loader){
    return this.over ? 'over' : '';
  }

  render(){
    return(
    <div className='explore'>
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
        <div className={`fetcher ${this.showMore()}`}
             onClick={() => this.fetchMore()}
             style={ { display: `${this.state.fetching || !this.props.scroll ? 'none' : '' }` } }>
          Load more
        </div>
        <i className={`fa fa-spinner fa-pulse fa-3x fa-fw`}
           style={ { display: `${!this.state.fetching  ? 'none' : '' }` } }></i>
      </div>
    );
  }
}
