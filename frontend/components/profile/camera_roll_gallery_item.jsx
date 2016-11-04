import React from 'react';

export default class CameraRollGalleryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = ({selected: false});
  }


  render(){
    return(
      <figure onClick={() => this.props.setEditId()}
              className='roll-thumb'>
        <img src={this.props.photo.feed_url}></img>
      </figure>
    );
  }
}
