import React from 'react';
import ExploreGalleryItem from './explore_gallery_item';
import JustifiedLayout from 'react-justified-layout';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const ExploreGallery = ({photos, klass}) =>(
  <div>
    <Masonry className={klass} options={masonryOptions}>
      {photos.map( photo => {
        return (
          <ExploreGalleryItem
            key={photo.id} photo={photo}/>
        );
      })}
    </Masonry>
  </div>
);

export default ExploreGallery;


// export default class ExploreGallery extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   handleImagesLoaded(imagesLoadedInstance) {
//     debugger;
//      this.toRender = this.items();
//   }
//
//   items(){
//     return this.props.photos.map( photo => {
//       return (
//         <ExploreGalleryItem
//           key={photo.id} photo={photo}/>
//       );
//     });
//   }
//
//   render(){
//   return(
//     <div>
//       <Masonry className={this.props.klass} options={masonryOptions}
//         onImagesLoaded={this.handleImagesLoaded.bind(this)}>
//         {this.toRender}
//       </Masonry>
//     </div>
//   );
//   }
// }
