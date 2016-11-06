import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {comment: ''};
  }

  update(e){
    this.setState({comment: e.target.value});
  }

  render(){
    const klass = this.state.comment ?
      'submit-comment' :
      'submit-comment disable-comments';
      
    return(
      <div className='comment-form'>
        <textarea onChange={e => this.update(e)}></textarea>
        <button className={klass}>
          Comment
        </button>
      </div>
    );
  }
}

export default CommentForm;
