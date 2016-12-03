import React from 'react';
import StreamItem from './stream_item';

class ImageStream extends React.Component {
  constructor(props) {
    super(props);
    this.state= { start:0, end: 0, photos: [] };
    this.componentWillMount = this.componentWillReceiveProps = this.initialState;
  }

  initialState(){
    const start = Math.max(0, this.findStart());
    const end = start + 7;
    this.setState({
      photos: this.props.photos.slice(start, end),
      start,
      end
    });
  }

  // This function finds the start of the stream relative to the
  // selected item that should sit in the middle
  findStart(){
    for (var i = 0; i < this.props.photos.length; i++) {
      if(this.props.photos[i].id === this.props.current) return i - 3;
    }
  }

  slide(offset){
    let start = Math.max(0, this.state.start + offset);
    let end = this.state.end + offset;
    this.setState({
      start,
      end,
      photos: this.props.photos.slice(start, end)
    });
  }

  atStart(){
    return this.state.start === 0 ? 'none' : '';
  }

  atEnd(){
    return this.state.end >= this.props.photos.length ? 'none' : '';
  }

  render(){
    window.that = this;
    return (
      <div className="centered-image-stream">
        <div className='image-stream'>
          <i onClick={() => this.slide(-3)}
             className="fa fa-chevron-right fa-rotate-180 nav-arrow-left"
             style={{display: `${this.atStart()}`}}
             aria-hidden="true"
            >
          </i>
          {this.state.photos.map(photo => (
            <StreamItem key={photo.id} photo={photo}
                current={this.props.current}/>)
          )}
          <i onClick={() => this.slide(3)}
             className="fa fa-chevron-right nav-arrow-right"
             aria-hidden="true"
             style={{display: `${this.atEnd()}`}}
             id={this.atEnd()}
            >
          </i>
        </div>
      </div>
    );
  }
}

export default ImageStream;
