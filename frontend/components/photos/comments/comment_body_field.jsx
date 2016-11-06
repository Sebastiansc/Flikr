import React from 'react';

export default class CommentBodyField extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ''};
  }

  update(e){
    this.setState({body: e.target.value});
  }

  render(){
    if(this.props.editing){
      return(
        <textarea className='comment-edit'
          defaultValue={this.props.comment.body}
          onChange={e => this.update(e)}>
        </textarea>
      );
    } else {
      return (
        <div className='comment-read'>
          {this.props.comment.body}
        </div>
      );
    }
  }
}
