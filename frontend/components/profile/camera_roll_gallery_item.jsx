import React from 'react';

export default class CameraRollGalleryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = ({selected: false});
  }


  render(){
    return(
      <figure onClick={() => this.props.setEditId(this.props.photo.id)}
              className='roll-thumb'
              style={{backgroundImage: `url('${this.props.photo.feed_url}')`}}>
      </figure>
    );
  }
}
