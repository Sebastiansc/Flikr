import React from 'react';
import ExploreGallery from './explore';
import MainGallery from './main_image';

class Images extends React.Component{
  constructor(props){
    super(props);
  }

  getChild(){
    if (window.location.hash === '#/home/main'){
      this.child = <MainGallery
              photos={this.props.photos}
              requestPhotos={this.props.requestPhotos}/>;
    } else {
      this.child = <ExploreGallery
              photos={this.props.photos}
              requestPhotos={this.props.requestPhotos}/>;
      this.gallery = <h1>Explore</h1>;
    }
  }

  componentWillMount(){
    this.props.requestPhotos();
  }

  render(){
    this.getChild();
    return (
      <div className='container'>
        {this.gallery}
        <div>
          {this.child}
        </div>
      </div>
    );
  }
}

export default Images;
