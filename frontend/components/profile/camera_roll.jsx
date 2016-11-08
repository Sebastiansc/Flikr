import React from 'react';
import CameraRollGallery from './camera_roll_gallery';
import EditForm from './edit_form';
import EditTray from './edit_tray';
import AlbumAddContainer from './album_add_container';
import Modal from 'react-modal';

export default class CameraRoll extends React.Component {
  constructor(props){
    super(props);
    this.state = {adding: false};
  }

  togglePhotoAdd(){
    this.setState({adding: !this.state.adding});

  }

  render(){
    return(
      <div className='centered-camera-roll'>
        <div className='roll-header'>
          <span>Select a photo for options</span>
        </div>
        <CameraRollGallery photos={this.props.photos}
          setEditId={this.props.setEditId}/>
        <EditForm open={this.props.open} photo={this.props.photo}
          toggleModal={this.props.toggleModal}
          setEditId={this.props.setEditId}
          updatePhoto={this.props.updatePhoto}/>
        <AlbumAddContainer open={this.state.adding}
            userId={this.props.userId}
            togglePhotoAdd={() => this.togglePhotoAdd()}/>
        <EditTray photo={this.props.photo}
           toggleModal={this.props.toggleModal}
           deletePhoto={this.props.deletePhoto}
           adding={this.state.adding}
           setEditId={this.props.setEditId}
           togglePhotoAdd={() => this.togglePhotoAdd()}/>
      </div>
    );
  }
}
