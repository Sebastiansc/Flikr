import React from 'react';
import Modal from 'react-modal';
import AlbumUploadGallery from './album/album_upload_gallery';

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
    overflow: 'scroll',
    opacity: 1,
    boxShadow: '0 0 0 1px rgba(0,0,0,.3),0 1px 4px rgba(0,0,0,.2)',
    backgroundColor: 'white',
    zIndex: 2001
  }
};

export default class CoverPhotoChange extends React.Component{
  constructor(props){
    super(props);
    this.state = {photo: undefined};
  }

  toggleInclusion(photoId){
    this.setState({photo: photoId});
  }

  setItemClass(photoId){
    return this.state.photo === photoId ? 'included' : '';
  }

  setCheckClass(photoId){
    return this.state.photo === photoId ? 'check' : 'no-check';
  }

  setButtonClass(){
    if(!this.uploadValid()) return 'invalid-upload';
  }

  uploadValid(){
    return Boolean(this.state.photo);
  }

  handleSubmit(){
    this.props.changeUserCover(this.state.photo, this.props.person.id);
    this.close();
  }

  close(){
    this.setState({photo: undefined});
    this.props.toggleOpen();
  }

  render(){
    return(
      <Modal style={customStyle}
          isOpen={this.props.open}>

        <div className='album-upload-header'>
          <span>PhotoStream</span>
          <button id='album-upload-button'
              className={`photo-upload ${this.setButtonClass()}`}
              disabled={!this.uploadValid()}
              onClick={() => this.handleSubmit()}>
            Done
          </button>
          <i className="fa fa-times" aria-hidden="true"
             onClick={() => this.close()}>
          </i>
        </div>

        <span className='album-select'>Select a photo</span>
        <AlbumUploadGallery setCheckClass={id => this.setCheckClass(id)}
          setItemClass={id => this.setItemClass(id)}
            toggleInclusion={id => this.toggleInclusion(id)}
            photos={this.props.photos}/>
      </Modal>
    );
  }
}
