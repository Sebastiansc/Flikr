import React from 'react';

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
  }

  render(){
    const klass = this.state.body ?
      'submit-comment' :
      'submit-comment disable-comments';

    return(
      <div className='comment-form'>
        <textarea onChange={e => this.update(e)}></textarea>
        <button className={klass}
          onClick={() => this.sendComment()}>
          Comment
        </button>
      </div>
    );
  }
}

export default CommentForm;
