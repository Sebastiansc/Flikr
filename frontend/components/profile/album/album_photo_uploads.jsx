import React from 'react';
import {formatUrl} from '../../../reducers/selectors';

export default class AlbumPhotoUploads extends React.Component{
  constructor(props){
    super(props);
  }

  openWidget(){
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
      (errors, photos) => {
        photos.forEach(photo => {
          const thumb_url = formatUrl(photo.secure_url, 145);
          const show_url = formatUrl(photo.secure_url, 1200);
          const feed_url = formatUrl(photo.secure_url, 700);
          this.props.createPhoto({
            photo: {
              img_url: photo.secure_url,
              title: photo.original_filename,
              thumb_url,
              show_url,
              feed_url
            },
            album_id: this.props.album.id,
          });
        });
        this.props.fetchAlbum(this.props.album.id);
      }
    );
  }

  render(){
    return(
      <li className='photo-upload' id='album-show-upload'
        onClick={() => this.openWidget()}
        style={{display: `${this.props.showIfOwner()}`}}>
        <i className="fa fa-upload in-cover-photo" aria-hidden="true"></i>
      </li>
    );
  }
}
