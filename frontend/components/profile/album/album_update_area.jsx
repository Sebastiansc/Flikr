import React from 'react';

export default class AlbumUpdateArea extends React.Component{
  constructor(props){
    super(props);
    this.defaultDesc = 'Click here to change description';
    this.state = {title: '', description: this.defaultDesc, editing: false};
  }

  componentWillReceiveProps(newProps){
    this.setState({title: newProps.album.title,
                  description: newProps.album.description || this.defaultDesc});
  }

  update(property, e){
    this.setState({[property]: e.target.value, editing: true});
  }

  edit(mode){
    this.setState({editing: mode});
  }

  clearDefaultDesc(){
    if (this.state.description === this.defaultDesc){
      this.setState({description: '', editing: true});
    } else {
      this.setState({editing: true});
    }
  }

  restoreDefault(){
    if(!this.state.description){
      this.setState({
        description: this.state.description || this.defaultDesc,
        editing: false
      });
    } else {
      this.setState({editing: false});
    }
  }

  setButtonClass(){
    return this.state.editing ? 'album-editing' : '';
  }

  setContentClass(){
    return this.state.editing ? 'content-editable-on' : '';
  }

  setLengthClass(){
    return this.state.editing ? 'hide-length' : '';
  }

  handleSubmit(){
    const album = {
      title: this.state.title,
      description: this.state.description,
      id: this.props.album.id
    };
    this.props.updateAlbum(album);
    this.setState({editing: false});
  }

  render(){
    return(
      <div>
        <div className={`album-editable-block ${this.setContentClass()}`}>
          <input type='text' className='album-editable-title'
            value={this.state.title}
            onChange={e => this.update('title', e)}
            onClick={() => this.edit(true)}
            onBlur={() => this.edit(false)}>
          </input>
          <input type='text' className='album-editable-desc'
            onClick={() => this.clearDefaultDesc()}
            onFocus={() => this.clearDefaultDesc()}
            onBlur={() => this.restoreDefault()}
            onChange={e => this.update('description', e)}
            value={this.state.description}>
          </input>
          <i className="fa fa-pencil in-editable-block" aria-hidden="true"></i>
        </div>
        <span className={`photo-length ${this.setLengthClass()}`}>
          {this.props.album.photos.length} photos
        </span>
        <button className={`album-update ${this.setButtonClass()}`}
            onClick={() => this.handleSubmit()}>
          Done
        </button>
      </div>
    );
  }
}
