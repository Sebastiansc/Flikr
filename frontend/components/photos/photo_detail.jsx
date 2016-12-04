import React from 'react';
import MainImage from './main_image';
import UserDescription from './user_description';
import ExtraPhotoDetails from './extra_photo_details';

export default class PhotoDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.photo) return <div></div>;

    return(
      <div>
        <MainImage photo={this.props.photo} photos={this.props.photos}/>
        <main className='p-detail-main cf'>
          <UserDescription author={this.props.photo.author}
            photo={this.props.photo}
            fans={this.props.fans}/>
          <ExtraPhotoDetails photo={this.props.photo}
            createTag={this.props.createTag}
            destroyTag={this.props.destroyTag}
            comments={this.props.comments}
            fans={this.props.fans}/>
        </main>
      </div>
    );
  }
}
