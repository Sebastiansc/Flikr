import React from 'react';
import CommentItem from './comment_item';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ''};
  }

  update(e){
    this.setState({body: e.target.value});
  }

  sendComment(){
    const comment = {
      body: this.state.body,
      photo_id: Number(window.location.hash.slice(14))
    };
    this.props.createComment(comment);
    this.setState({body: ''});
  }

  render(){
    const klass = this.state.body ?
      'submit-comment' :
      'submit-comment disable-comments';
    return(
      <div className='comment-form'>
        {this.props.comments.map(comment => (
          <CommentItem key={comment.id}
            comment={comment}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}/>)
        )}
        <textarea onChange={e => this.update(e)}
           value={this.state.body}></textarea>
        <button className={klass}
          onClick={() => this.sendComment()}>
          Comment
        </button>
      </div>
    );
  }
}

export default CommentForm;
