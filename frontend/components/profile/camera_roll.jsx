import React from 'react';
import EditTray from './edit_tray';
import EditForm from './edit_form';
import CameraRollGallery from './camera_roll_gallery';

// Props: photos, patchPhoto action creator
// Child components: EditTray, EditForm, CameraRollItem
export default class CameraRoll extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='centered-camera-roll'>
        <CameraRollGallery />
      </div>
    );
  }
}
