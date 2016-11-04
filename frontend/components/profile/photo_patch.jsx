import React from 'react';

export default class PhotoCreate extends React.Component{
  constructor(){
    super();
    this.state = {title: '', description: '', error: ''};
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
        </form>
      </div>
    );
  }
}
