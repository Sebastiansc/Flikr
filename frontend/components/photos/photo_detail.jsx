import React from 'react';
import MainImage from './main_image';
import UserDescription from './user_description';
import ExtraPhotoDetails from './extra_photo_details';

export default class PhotoDetail extends React.Component{
  constructor(props){
    super(props);
    this.componentWillMount = this.load;
  }

  load(){
    switch (this.props.fetch) {
      case 'explore':
        this.props.fetchInBatch(this.props.photoId);
        break;
      case 'favorites':
        this.props.fetchFavorites(this.props.person.id);
        break;
      default:
        this.props.getUser(this.props.person.id);
        break;
    }
  }

  photoLink(photoId){
    if (this.props.path.includes('explore')){
      return `home/explore/photos/${photoId}`;
    } else if (this.props.path.includes('favorites')){
      return `home/favorites/photos/${this.props.personId}/${photoId}`;
    } else {
      return `home/user/photos/${this.props.personId}/${photoId}`;
    }
  }

  render(){
    return(
      <div>
        <MainImage photo={this.props.photo} photos={this.props.photos}
            fetchInBatch={this.props.fetchInBatch}
            path={(photoId) => this.photoLink(photoId)}
            load={() => this.load()}/>
        <main className='p-detail-main cf'>
          <UserDescription author={this.props.photo.author}
            photo={this.props.photo}/>
          <ExtraPhotoDetails photo={this.props.photo}
            createTag={this.props.createTag}
            destroyTag={this.props.destroyTag}
            comments={this.props.comments}/>
        </main>
      </div>
    );
  }
}
