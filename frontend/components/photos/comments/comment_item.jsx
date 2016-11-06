import React from 'react';
import CommentBodyField from './comment_body_field';
import {Link} from 'react-router';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing: false};
  }

  toggleEditMode(){
    if(!this.owner()) return;
    this.setState({editing: !this.state.editing});
  }

  owner(){
    currentUser.id !== this.props.comment.author.id
  }

  delete(){
    if(!this.owner()) return;
    this.props.deleteComment(this.props.comment.id);
    this.toggleEditMode();
  }

  render(){
    return (
      <li>
        <div className='comment-info'>
          <p className='comment-author'>
            <Link to={`home/profile/${this.props.comment.author.id}`}>
              {this.props.comment.author.username}
            </Link>
            <span>{this.props.comment.posted}</span>
          </p>
          <div className='comment-tools'>
            <span onClick={() => this.toggleEditMode()}>Edit</span>
            <span
               onClick={() => this.delete()}>
               Delete
            </span>
          </div>
        </div>
        <CommentBodyField editing={this.state.editing}
           comment={this.props.comment}/>
      </li>
    );
  }
}
