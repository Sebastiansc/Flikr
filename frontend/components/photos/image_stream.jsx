import React from 'react';
import StreamItem from './stream_item';

class ImageStream extends React.Component {
  constructor(props) {
    super(props);
    this.state= {start:0, end: 7, photos: props.photos.slice(0,7)};
  }

  componentWillReceiveProps(newProps){
    const start = this.findStart(newProps.current);
    this.setState({
      start: start,
      end: start + 7,
      photos: newProps.photos.slice(start, start + 7)});
  }

  findStart(current){
    for (var i = 0; i < this.props.photos.length; i++) {
      if(this.props.photos[i].id === current) return i;
    }
  }

  slide(offset){
    if (this.state.end === this.props.photos.length){
      let start = this.state.start + offset;
      let end = this.state.end - (this.state.end - this.state.start);
      this.setState({
        photos: this.props.photos.slice(start, end),
        start,
        end
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

  atStart(){
    return this.state.start === 0 ? 'none' : '';
  }

  atEnd(){
    return this.state.end === this.props.photos.length ? 'none' : '';
  }

  render(){
    return (
      <div className="centered-image-stream">
        <div className='image-stream'>
          <i onClick={() => this.slide(-7)}
             className="fa fa-chevron-right fa-rotate-180 nav-arrow-left"
             style={{display: `${this.atStart()}`}}
             aria-hidden="true"
            >
          </i>
          {this.state.photos.map(photo => (
            <StreamItem key={photo.id} photo={photo}
                current={this.props.current}
                path={this.props.path}/>)
          )}
          <i onClick={() => this.slide(7)}
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
