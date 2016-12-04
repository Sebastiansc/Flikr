import React from 'react';
import {Link} from 'react-router';

export default class TagItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {hovering: false};
  }

  toggleClose(){
    this.setState({hovering: !this.state.hovering});
  }

  remove(){
    this.props.destroyTag(this.props.photoId, this.props.tag.id);
  }

  showClose(){
    if(this.state.hovering){
      return(
        <i className="fa fa-times" id='tag-close' aria-hidden="true"
           onClick={() => this.remove()}>
        </i>
      );
    }
  }

  render(){
    return(
      <li onMouseEnter={() => this.toggleClose()}
          onMouseLeave={() => this.toggleClose()}
        className='tag-item'>
        <Link to={`home/trending/${this.props.tag.id}`}>
          {this.props.tag.name}
        </Link>
        {this.showClose()}
      </li>
    );
  }
}
