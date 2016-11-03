import React from 'react';
import StreamItem from './stream_item';

class ImageStream extends React.Component {
  constructor(props) {
    super(props);
    this.state= {start:0, end: 7, photos: props.photos.slice(0,7)};
  }

  slide(offset){
    // debugger;
    if (this.state.end === this.props.photos.length -1){
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
      start = end - this.props.photos.length;
      end = this.props.photos.length - 1;
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
        <span onClick={() => this.slide(-7)} className='nav-arrow'
              id={this.state.start ? '' : 'disabled'}>
          Prev
        </span>
        {this.state.photos.map(photo => (
          <StreamItem key={photo.id} photo={photo}
              current={this.props.current}/>)
        )}
        <span onClick={() => this.slide(7)} className='nav-arrow'>
          Next
        </span>
      </div>
    );
  }
}

export default ImageStream;
