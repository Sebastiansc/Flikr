import React from 'react';
import ExploreGalleryItem from './explore_gallery_item';
import JustifiedLayout from 'react-justified-layout';

export default class ExploreGallery extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestPhotos();
  }

  render(){
    return(
      <div className='explore-gallery'>
        <h3>Explore</h3>
        <JustifiedLayout
          showWidows={false}
          boxSpacing={{ horizontal: 5, vertical: 5}}>
          {this.props.photos.map(photo => (
            <ExploreGalleryItem
              style={{height: (photo.height / 4), width: (photo.width / 4)}}
              key={photo.id} photo={photo}/>
          ))}
        </JustifiedLayout>
      </div>
    );
  }
}

// {this.props.photos.map( photo => {
//   // const aspectRatio = (photo.width / 10) / (photo.height / 10);
//   // aspectRatio={aspectRatio}
//   return (
//     <ExploreGalleryItem
//       style={{height: 100, width: 200}}
//       key={photo.id} photo={photo}/>
//   );
// })}
