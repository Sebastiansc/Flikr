import React from 'react';
import ExploreGallery from '../../photos/explore';
import AlbumUpdateArea from './album_update_area';
import PhotoUpload from '../../profile/photo_upload';
import AlbumPhotoUpload from './album_photo_uploads';

export default class AlbumShow extends React.Component{
  constructor(props){
    super(props);
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
            <AlbumPhotoUpload album={this.props.album}
                fetchAlbum={this.props.fetchAlbum}
                createPhoto={this.props.createPhoto}/>
        </div>
        <ExploreGallery photos={this.props.album.photos}/>
      </div>
    );
  }
}
