import React from 'react';
import CoverPhotoChange from './cover_photo_change';

export default class ProfileHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  toggleOpen(){
    this.setState({open: !this.state.open});
  }

  showIfOwner(){
    return this.props.person.id === this.props.currentUser.id ? '' : 'none';
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
              <img src={this.props.person.image_url}></img>
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
