import React from 'react';

const ProfileHeader = ({person, photos}) => {
  return(
    <section>
      <div className='cover-photo'
        style={{backgroundImage: `url('${person.cover_photo}')`}}>
        <div className='cover-photo-gradient'></div>

        <div className='center-header'>
          <div className='edit'>
            <img src={person.image_url}></img>
          </div>
          <div className='title-block-content'>
            <h1 className='title'>{person.username}</h1>
          </div>
          <ul>
            <li>{photos.length} photos</li>
            <li>Joined {person.join_year}</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProfileHeader;
