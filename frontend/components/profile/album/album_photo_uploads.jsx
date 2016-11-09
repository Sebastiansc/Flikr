import React from 'react';

export default class AlbumPhotoUploads extends React.Component{
  constructor(props){
    super(props);
  }

  formatUrl(url, size) {
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_${size}/${tailUrl}`;
  }

  openWidget(){
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
      (errors, photos) => {
        photos.forEach(photo => {
          const thumb_url = this.formatUrl(photo.secure_url, 145);
          const show_url = this.formatUrl(photo.secure_url, 1200);
          const feed_url = this.formatUrl(photo.secure_url, 700);
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
        onClick={() => this.openWidget()}>
        <i className="fa fa-upload in-cover-photo" aria-hidden="true"></i>
      </li>
    );
  }
}
