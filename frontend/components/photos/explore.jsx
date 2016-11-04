import React from 'react';
import ExploreGalleryItem from './explore_gallery_item';
import JustifiedLayout from 'react-justified-layout';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

export default class ExploreGallery extends React.Component{
  constructor(props){
    super(props);
  }

  // componentWillMount(){
  //   this.props.requestPhotos();
  // }

  render(){
     return(
      <div>
      <Masonry options={masonryOptions}>
        {this.props.photos.map( photo => {
          return (
            <ExploreGalleryItem
              key={photo.id} photo={photo}/>
          );
        })}
      </Masonry>
    </div>
    );
  }
}
