import React from 'react';
import {Link} from 'react-router';
import TagItem from './tag_item';

export default class Tags extends React.Component{
  constructor(props){
    super(props);
    this.state = {adding: false, tags: ''};
  }

  add(){
    this.setState({adding: !this.state.adding});
  }

  handleSubmit(e){
    const tags = this.state.tags.split(' ');
    const photoId = window.location.hash.slice(14);
    tags.forEach(tag => this.props.createTag(photoId, {name: tag}));
    this.setState({adding: false, tags: ''});
  }

  update(e){
    this.setState({tags: e.target.value});
  }

  addForm(){
    if(this.state.adding){
      return(
        <form onSubmit={e => this.handleSubmit(e)}
          className='tags-form'>
          <input onChange={e => this.update(e)} type="text"></input>
        </form>
      );
    }
  }

  render(){
    return(
      <div className="tags-view">
        <div className='tag-header'>
          <Link to=''>Tags</Link>
          <span onClick={() => this.add()}>Add tags</span>
        </div>
        {this.addForm()}
        <ul className='tags'>
          {this.props.tags.map(tag => <TagItem key={tag.id} tag={tag}/>)}
        </ul>
      </div>
    );
  }
}
