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
    overflow: 'scroll',
    opacity: 1,
    boxShadow: '0 0 0 1px rgba(0,0,0,.3),0 1px 4px rgba(0,0,0,.2)',
    backgroundColor: 'white',
    zIndex: 2001
  }
};

export default class AlbumUpload extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: '', description: '', photos: []};
  }

  toggleInclusion(photoId){
    if(this.state.photos.includes(photoId)){
      for (let i = 0; i < this.state.photos.length; i++) {
        if (this.state.photos[i] === photoId){
          this.state.photos.splice(i, 1);
        }
      }
    } else {
      this.state.photos.push(photoId);
    }
    this.setState({photos: this.state.photos});
  }

  setItemClass(photoId){
    return this.state.photos.includes(photoId) ? 'included' : '';
  }

  setCheckClass(photoId){
    return this.state.photos.includes(photoId) ? 'check' : 'no-check';
  }

  setButtonClass(){
    if(!this.uploadValid()) return 'invalid-upload';
  }

  uploadValid(){
    return (
      Boolean(this.state.title && this.state.photos.length > 0)
    );
  }

  update(property, e){
    this.setState({[property]: e.target.value});
  }

  handleSubmit(){
    const album = {
      title: this.state.title,
      description: this.state.description
    };
    const photos = this.state.photos;
    this.props.createAlbum(album, photos);
    this.close();
  }

  close(){
    this.setState({photos: [], title: '', description: ''});
    this.props.toggleCreate();
  }

  render(){
    return(
      <Modal style={customStyle}
          isOpen={this.props.open}>

        <div className='album-upload-header'>
          <span>Create a new album</span>
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

        <form id='album-upload-form' className='edit-form'>
          <div className='edit-text'>
            <input type='text' placeholder='Change Title'
              onChange={e => this.update('title', e)}/>
            <textarea onChange={e => this.update('description', e)}
                placeholder='Change description'>
            </textarea>
          </div>
        </form>

        <span className='album-select'>Select photos to add</span>
        <div className='album-upload-stream'>
          {this.props.photos.map(photo => (
            <div key={photo.id}
                className={`album-upload-item ${this.setItemClass(photo.id)}`}
                style={{backgroundImage: `url('${photo.feed_url}')`}}
                onClick={() => this.toggleInclusion(photo.id)}>
            <i className={`fa fa-check ${this.setCheckClass(photo.id)}`}
               aria-hidden="true">
            </i>
            </div>
          ))}
        </div>

      </Modal>
    );
  }
}
