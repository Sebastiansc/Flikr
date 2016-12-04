import React from 'react';
import ExploreGallery from '../../photos/explore';
import AlbumUpdateArea from './album_update_area';
import AlbumUpload from './album_upload';
import PhotoUpload from '../../profile/photo_upload';
import AlbumPhotoUpload from './album_photo_uploads';
import JustifiedGallery from '../../photos/justified_gallery';

export default class AlbumShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {adding: false};
  }

  toggleOpen(){
    this.setState({adding: !this.state.adding});
  }

  owner(){
    return this.props.currentUser.id === this.props.user.id;
  }

  showIfOwner(){
    return this.owner() ? '' : 'none';
  }

  editable(){
    return this.owner();
  }

  render(){
    if (!this.props.album) return <div></div>;

    return(
      <div className='album-show'>

        <div className='album-show-cover'
          style={{
            backgroundImage: `url('${this.props.album.cover_photo.feed_url}')`}
          }>

          <div className='album-cover-change'
              style={{display: `${this.showIfOwner()}`}}
              onClick={() => this.toggleOpen()}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>

          <AlbumUpload processAction={this.props.changeCoverPhoto}
             open={this.state.adding}
             album={this.props.album}
             toggleOpen={() => this.toggleOpen()}
             photos={this.props.userPhotos}
             show={this.showIfOwner()}
             messages={["Change cover photo", "Select a photo"]}/>

          <div className='dimining'></div>
          <AlbumUpdateArea album={this.props.album}
              updateAlbum={this.props.updateAlbum}
              createAndAddPhoto={this.props.createAndAddPhoto}
              editable={this.editable()}/>

          <span className='autorship'>
            {`By: ${this.props.album.owner.username}`}
          </span>

          <AlbumPhotoUpload album={this.props.album}
              fetchAlbum={this.props.fetchAlbum}
              createAndAddPhoto={this.props.createAndAddPhoto}
              showIfOwner={() => this.showIfOwner()}/>
        </div>

        <JustifiedGallery photos={this.props.photos}
            albumId={this.props.album.id}
            rowHeight={200}
            klass={this.editable() ? 'album-show-delete' : ''}
            dropPhoto={this.props.dropPhoto}
            link={`/home/albumPhotos/${this.props.album.id}/`}/>

      </div>
    );
  }
}
