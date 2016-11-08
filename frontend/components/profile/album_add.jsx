import React from 'react';
import Modal from 'react-modal';

const customStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(238,238,238, .6)',
    zIndex: 2000
  },
  content: {
    width: '750px',
    height: '440px',
    margin: 'auto',
    position: 'absolute',
    opacity: 1,
    boxShadow: '0 0 0 1px rgba(0,0,0,.3),0 1px 4px rgba(0,0,0,.2)',
    backgroundColor: 'white',
    zIndex: 2001
  }
};

export default class AlbumAdd extends React.Component{
  constructor(props){
    super(props);
    this.state = {albums: []};
  }

  toggleInclusion(albumId){
    if(this.state.albums.includes(albumId)){
      for (let i = 0; i < this.state.albums.length; i++) {
        if (this.state.albums[i] === albumId){
          this.state.albums.splice(i, 1);
        }
      }
    } else {
      this.state.albums.push(albumId);
    }
    this.setState({albums: this.state.albums});
  }

  setClass(albumId){
    return this.state.albums.includes(albumId) ? 'album-selected' : '';
  }

  addToAlbums(){
    this.state.albums.forEach(albumId => {
      this.props.addPhoto(albumId, this.props.photoId);
    });
    this.props.togglePhotoAdd();
  }

  componentWillMount(){
    this.props.fetchUserAlbums(this.props.userId);
  }


  render(){
    return(
      <Modal isOpen={this.props.open} style={customStyle}>

        <div className='edit-header' id='album-add-header'>
          <span>Add this photo to an album</span>
          <span onClick={() => this.props.togglePhotoAdd()}>X</span>
        </div>

        <ul className='albums-list'>
          {this.props.albums.map(album => (
            <div key={album.id}
              className={`album-list-item ${this.setClass(album.id)}`}
              onClick={() => this.toggleInclusion(album.id)}>
              <li key={album.id}
                style={{backgroundImage:
                       `url('${album.cover_photo.feed_url}')`
                      }}>
              </li>
              <div className='album-list-details'>
                <span>{album.title}</span>
                <span>{album.photos.length} photos</span>
              </div>
            </div>
          ))}
        </ul>
        <div className='add-photos'>
          <button className='photo-upload' onClick={() => this.addToAlbums()}>
            Done
          </button>
        </div>
      </Modal>
    );
  }
}
