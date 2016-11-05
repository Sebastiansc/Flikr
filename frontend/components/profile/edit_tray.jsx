import React from 'react';

const EditTray = ({toggleModal, photo, deletePhoto}) => {
  let klass;
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      // you're at the bottom of the page
    klass = 'at-bottom-edit';
  }

  if(photo.id) {
    return(
      <div className={`edit-tray ${klass}`}>
        <div className='clear-select'>
          Clear selection
        </div>
        <div className='tray-image-container'>
          <figure>
            <img src={`${photo.thumb_url}`}></img>
          </figure>
        </div>
        <ul>
          <li>Privacy</li>
          <li onClick={() => toggleModal()}>Edit</li>
          <li>Add to Album</li>
          <li className='delete' onClick={() => deletePhoto(photo.id)}>
            Delete
          </li>
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default EditTray;
