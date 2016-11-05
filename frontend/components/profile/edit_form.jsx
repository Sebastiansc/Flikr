import React from 'react';
import Modal from 'react-modal';

const customStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: .9,
    background: '#f3f5f6',
    zIndex: 2000
  },
  content: {
    width: '500px',
    height: '320px',
    margin: 'auto',
    position: 'absolute',
    opacity: 1,
    zIndex: 2001
  }
};

export default class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.state={title: '', public: true, description: ''};
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
      privacy: this.state.privacy,
      id: this.props.photo.id
    };
    this.props.updatePhoto(attributes);
  }

  render(){
    return (
      <Modal isOpen={this.props.open} style={customStyle}>
        <main className='edit-field'>

          <div className='edit-header'>
            <span>Edit Photo</span>
            <span onClick={() => this.props.toggleModal()}>X</span>
          </div>

          <form className='edit-form' onSubmit={e => this.handleSubmit(e)}>
            <div className='edit-text'>
              <input type='text' placeholder='Change Title'
                value={this.state.title}
                onChange={e => this.update('title', e)}/>
              <textarea value={this.state.description}
                onChange={e => this.update('description', e)}
                placeholder='Change description'>
              </textarea>
            </div>

            <div className='privacy-options'>
              <span>Who can see this photo?</span>
              <select onChange={e => this.update('privacy', e)}>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

            <div className='submit'>
              <button onClick={() => this.props.toggleModal()}
                className='cancel'>Cancel</button>
              <button onClick={e => this.handleSubmit(e)}
                 className='save'>Save</button>
            </div>
          </form>
        </main>
      </Modal>
    );
  }
}
