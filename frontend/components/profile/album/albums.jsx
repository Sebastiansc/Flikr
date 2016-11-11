import React from 'react';
import AlbumUpload from './album_upload';
import AlbumGallery from './album_gallery';

export default class Albums extends React.Component{
  constructor(props){
    super(props);
    this.state = {creating: false};
  }

  toggleOpen(){
    this.setState({creating: !this.state.creating});
  }

  showIfOwner(){
    return this.props.currentUser.id === this.props.person.id ? '' : 'none';
  }

  render(){
    return(
      <div className='albums-main-page'>
        <div className='album-upload-toggler'
            style={{display: `${this.showIfOwner()}`}}
            onClick={() => this.toggleOpen()}>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
          <span className='create-album'>
            Create Album
          </span>
        </div>
        <AlbumUpload addPhoto={this.props.addPhoto}
           processAction={this.props.createAlbum}
           open={this.state.creating}
           toggleOpen={() => this.toggleOpen()}
           photos={this.props.photos}
           show={this.showIfOwner()}
           messages={["Create a new album", "Select Photos to add"]}/>
        <AlbumGallery albums={this.props.albums}
           deleteAlbum={this.props.deleteAlbum}
           show={() => this.showIfOwner()}/>
      </div>
    );
  }
}
