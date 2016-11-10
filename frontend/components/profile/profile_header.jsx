import React from 'react';
import { values } from 'lodash';
import { formatUrl } from '../../reducers/selectors';
import CoverPhotoChange from './cover_photo_change';

export default class ProfileHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false, updating: false};
  }

  toggleOpen(){
    this.setState({open: !this.state.open});
  }

  showIfOwner(){
    return this.props.person.id === this.props.currentUser.id ? '' : 'none';
  }

  toggleProfileUpload(){
    this.setState({updating: !this.state.updating});
  }

  openWidget() {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
      (errors, photos) => {
        if(!values(errors).length) {
         const imageUrl = formatUrl(photos[0].secure_url, 200);
         this.props.changeProfilePic(this.props.currentUser.id, imageUrl);
        }
    });
  }

  render(){
    return(
      <section>
        <div className='cover-photo'
          style={{backgroundImage: `url('${this.props.person.cover_photo}')`}}>
          <div className='cover-photo-gradient'></div>
          <div className='update-cover-photo'
              onClick={() => this.toggleOpen()}
              style={{display: `${this.showIfOwner()}`}}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
          <div className='center-header'>

            <div className='edit'>
              <div className='edit-img'
                   style={{backgroundImage:
                          `url('${this.props.person.image_url}')`
                          }}>
              </div>
              <div className='pic-edit-container'>
                <i className="fa fa-pencil-square-o p-pic-edit"
                   aria-hidden="true"
                   style={{display: `${this.showIfOwner()}`}}
                   onClick={() => this.openWidget()}>
                </i>
              </div>
            </div>

            <div className='title-block-content'>
              <h1 className='title'>{this.props.person.username}</h1>
            </div>
            <ul>
              <li>{this.props.photos.length} photos</li>
              <li>Joined {this.props.person.join_year}</li>
            </ul>
          </div>

          <CoverPhotoChange photos={this.props.photos}
              toggleOpen={() => this.toggleOpen()}
              open={this.state.open}
              person={this.props.person}
              changeUserCover={this.props.changeUserCover}/>

        </div>
      </section>
    );
  }

}
