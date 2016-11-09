import React from 'react';
import AlbumUpload from './album_upload';
import AlbumGallery from './album_gallery';

export default class Albums extends React.Component{
  constructor(props){
    super(props);
    this.state = {creating: false};
  }

  toggleCreate(){
    this.setState({creating: !this.state.creating});
  }

  render(){
    return(
      <div className='albums-main-page'>
        <div className='album-upload-toggler'
            onClick={() => this.toggleCreate()}>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
          <span className='create-album'>
            Create Album
          </span>
        </div>
        <AlbumUpload addPhoto={this.props.addPhoto}
           createAlbum={this.props.createAlbum}
           open={this.state.creating}
           toggleCreate={() => this.toggleCreate()}
           photos={this.props.photos}/>
        <AlbumGallery albums={this.props.albums}
           deleteAlbum={this.props.deleteAlbum}/>
      </div>
    );
  }
}
