import React from 'react';

export default class PhotoCreate extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: '', description: '', error: ''};
  }

  formatUrl(url){
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_145/${tailUrl}`;
  }

  openWidget(){
    if(!this.state.title){
      this.setState({error: 'Image must have a title'});
      return;
    }

    const that = this;
    cloudinary.openUploadWidget(cloudinaryOptions,
       (errors, photos) => {
         photos.forEach(photo => {
           const thumbUrl = that.formatUrl(photo.secure_url);
           that.props.createPhoto({
             img_url: photo.secure_url,
             title: this.state.title,
             description: this.state.body,
             thumb_url: thumbUrl
           });
        });
      }
    );
  }

  update(property, e){
    this.setState({[property]: e.target.value});
  }

  renderErrors(){
    const error = this.state.error;
    if(error){
      this.state.error = '';
      return <span>error</span>;
    }
  }

  render(){
    return(
      <div>
        <form>
          {this.renderErrors()}
          <input type='text' onChange={e => this.update('title', e)}
                 placeholder='Title'>
          </input>
          <textarea onChange={e => this.update('description', e)}></textarea>
          <a onClick={() => this.openWidget()}>Select a picture</a>
        </form>
      </div>
    );
  }
}
