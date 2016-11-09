import React from 'react';
import ExploreGallery from '../../photos/explore';
import AlbumUpdateArea from './album_update_area';
import PhotoUpload from '../../profile/photo_upload';

export default class AlbumShow extends React.Component{
  constructor(props){
    super(props);
  }

  formatUrl(url, size) {
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_${size}/${tailUrl}`;
  }

  openWidget(){
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
      (errors, photos) => {
        photos.forEach(photo => {
          debugger;
          const thumb_url = this.formatUrl(photo.secure_url, 145);
          const show_url = this.formatUrl(photo.secure_url, 1200);
          const feed_url = this.formatUrl(photo.secure_url, 700);
          this.props.createPhoto({
            photo: {
              img_url: photo.secure_url,
              title: photo.original_filename,
              thumb_url,
              show_url,
              feed_url
            },
            album_id: this.props.album.id,
          });
        });
        this.props.fetchAlbum(this.props.album.id);
      }
    );
  }

  render(){
    return(
      <div className='album-show'>
        <div className='album-show-cover'
          style={{
            backgroundImage: `url('${this.props.album.cover_photo.feed_url}')`}
          }>
          <div className='dimining'></div>
          <AlbumUpdateArea album={this.props.album}
              updateAlbum={this.props.updateAlbum}
              createAndAddPhoto={this.props.createAndAddPhoto}/>
            <span className='autorship'>
              {`By: ${this.props.album.owner.username}`}
            </span>
            <li className='photo-upload' id='album-show-upload'
              onClick={() => this.openWidget()}>
              <i className="fa fa-upload in-cover-photo" aria-hidden="true"></i>
            </li>
        </div>
        <ExploreGallery photos={this.props.album.photos}/>
      </div>
    );
  }
}
