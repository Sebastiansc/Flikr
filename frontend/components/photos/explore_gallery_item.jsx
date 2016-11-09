import React from 'react';
import { Link, withRouter } from 'react-router';

class ExploreGalleryItem extends React.Component{
  constructor(props){
    super(props);
  }

  goToPhotoDetail(id){
    this.props.router.push(`home/photos/${id}`);
  }

  username(){
    const author = this.props.photo.author;
    return author ? author.username : 'You!';
  }

  render(){
    return(
      <figure onClick={() => this.goToPhotoDetail(this.props.photo.id)}
              className='explore-thumb'>
        <img onLoad={() => console.log("loaded")}
             src={this.props.photo.feed_url}></img>

        <div className='explore-item-bottom'>
          <div className="explore-item-text">
            <Link to='' className='explore-item-title'>
              {this.props.photo.title}
            </Link>
            <Link to='' className='explore-item-owner'>
              by {this.username()}
            </Link>
          </div>

          <div className='explore-item-tool'></div>
          <div className='explore-item-tool'></div>
        </div>
      </figure>
    );
  }
}

export default withRouter(ExploreGalleryItem);
