import React from 'react';
import CameraRollGallery from './camera_roll_gallery';
import EditForm from './edit_form';
import EditTray from './edit_tray';
import Modal from 'react-modal';

export default class CameraRoll extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    debugger;
    return(
      <div className='centered-camera-roll'>
        <CameraRollGallery photos={this.props.photos}
          setEditId={this.props.setEditId}/>
        <EditForm photo={this.props.photo} />
        <EditTray photo={this.props.photo} openModal={this.props.openModal}/>
      </div>
    );
  }
}
