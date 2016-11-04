import React from 'react';

const EditTray = ({openModal, photo, deletePhoto}) => (
  <div className='edit-tray'>
    <ul>
      <li>Privacy</li>
      <li onClick={() => openModal()}>Edit</li>
      <li>Add to Album</li>
      <li className='delete' onClick={() => deletePhoto(photo.id)}>
        Delete
      </li>
    </ul>
  </div>
);

export default EditTray;
