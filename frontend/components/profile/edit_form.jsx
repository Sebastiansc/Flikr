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
    this.state = {title: '', public: true, description: ''};
  }

  componentWillUnmount(){
    this.props.setEditId(undefined);
  }

  update(property, e){
    if(property === 'public'){
      this.setState({public: !this.state.public});
    } else {
      this.setState({[property]: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const attributes = {
      title: this.state.title || this.props.photo.title,
      description: this.state.description || this.props.photo.description,
      public: this.state.public,
      id: this.props.photo.id
    };
    this.props.updatePhoto(attributes);
    this.props.toggleModal();
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
                defaultValue={this.props.photo.title}
                onChange={e => this.update('title', e)}/>
              <textarea defaultValue={this.props.photo.description}
                onChange={e => this.update('description', e)}
                placeholder='Change description'>
              </textarea>
            </div>

            <div className='privacy-options'>
              <span>Who can see this photo?</span>
              <select onChange={e => this.update('public', e)}>
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
