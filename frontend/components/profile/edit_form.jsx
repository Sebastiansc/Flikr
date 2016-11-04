import React from 'react';
import Modal from 'react-modal';

const customStyle = {
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#f3f5f6',
    zIndex: 2000
  },
  content: {
    width: '25vh',
    height: '30vh',
    position: 'absolute',
    zIndex: 2001
  }
};

export default class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.state={title: '', privacy: false, description: ''};
  }

  update(property, e){
    if(property === 'privacy'){
      this.setState({privacy: !this.state.privacy});
    } else {
      this.setState({[property]: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const attributes = {
      title: this.state.title,
      description: this.state.description,
      privacy: this.state.privacy
    };
  }

  render(){
    return (
      <Modal isOpen={this.props.open} style={customStyle}>
        <main>
          <div className='edit-header'>Edit Photo</div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className='edit-text'>
              <input type='text' placeholder='Change Title'
                defaultValue={this.props.photo.title}
                value={this.state.title}
                onChange={e => this.update('title', e)}/>
              <textarea value={this.state.description}
                defaultValue={this.props.photo.description}
                onChange={e => this.update('body', e)}>
              </textarea>
            </div>
            <div className='privacy-options'>
              <span>Who can see this photo?</span>
              <select onChange={e => this.update('privacy', e)}>
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>
          </form>
        </main>
      </Modal>
    );
  }
}
