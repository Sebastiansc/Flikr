import React from 'react';
import MainImage from './main_image';
import UserDescription from './user_description';
import ExtraPhotoDetails from './extra_photo_details';

export default class PhotoDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.photos.length === 0) this.props.requestPhotos();
  }

  render(){
    return(
      <div>
        <MainImage photo={this.props.photo} photos={this.props.photos}
           requestPhotos={this.props.requestPhotos}/>
        <main className='p-detail-main cf'>
          <UserDescription author={this.props.photo.author}
            photo={this.props.photo}/>
          <ExtraPhotoDetails photo={this.props.photo}
            createTag={this.props.createTag}
            destroyTag={this.props.destroyTag}/>
        </main>
      </div>
    );
  }
}
