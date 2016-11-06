import React from 'react';
import StreamItem from './stream_item';

class ImageStream extends React.Component {
  constructor(props) {
    super(props);
    this.state= {start:0, end: 7, photos: props.photos.slice(0,7)};
  }

  componentWillReceiveProps(newProps){
    this.setState({start:0, end: 7, photos: newProps.photos.slice(0,7)});
  }

  slide(offset){
    if (this.state.end === this.props.photos.length){
      this.setState({
        start: 0,
        end: 7,
        photos: this.props.photos.slice(0, 7)
      });
      return;
    }

    let start = this.state.start + offset;
    let end = this.state.end + offset;
    if (end >= this.props.photos.length){
      end = this.props.photos.length;
    }

    this.setState({
      start,
      end,
      photos: this.props.photos.slice(start, end)
    });
  }

  render(){
    return (
      <div className='image-stream'>
        <i onClick={() => this.slide(-7)}
           className="fa fa-chevron-right fa-rotate-180 nav-arrow-left"
           aria-hidden="true"
          >
        </i>
        {this.state.photos.map(photo => (
          <StreamItem key={photo.id} photo={photo}
              current={this.props.current}/>)
        )}
        <i onClick={() => this.slide(7)}
           className="fa fa-chevron-right nav-arrow-right"
           aria-hidden="true"
          >
        </i>
      </div>
    );
  }
}

export default ImageStream;
