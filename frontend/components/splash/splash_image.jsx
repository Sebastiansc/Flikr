import React from 'react';
import { Link } from 'react-router';

export default class SplashImage extends React.Component{
  constructor(){
    super();
    this.images = [
      "https://res.cloudinary.com/flikr/image/upload/v1480895023/uwpp8domhaaumeagyofk.jpg",
      "https://res.cloudinary.com/flikr/image/upload/v1480895018/hfmxd90emboaxqat15sx.jpg",
      "https://res.cloudinary.com/flikr/image/upload/v1480894472/o76rnyobplpdwfkfxg4u.jpg"
    ];
    const randIndex = Math.floor(Math.random() * 3);
    this.state = {url: this.images[randIndex], current: randIndex};
    this.autoplay = window.setInterval(() => this.next(), 4000);
  }

  next(){
    const nextIndex = this.state.current === 2 ? 0 : this.state.current + 1;
    this.setState({url: this.images[nextIndex], current: nextIndex});
  }

  componentWillUnmount(){
    window.clearInterval(this.autoplay);
  }

  render(){
    return(
      <div className='splash-main-image'
        style={{backgroundImage: `url('${this.state.url}')`}}>
        <div className='splash-main-text'>
          <h1>The home for all your photos</h1>
          <p>Upload, access, organize and share your photos from anywhere in the world</p>
          <Link to='signup' className='photo-upload make-it-pop'>Sign Up</Link>
        </div>
      </div>
    );
  }
}
