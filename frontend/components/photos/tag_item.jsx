import React from 'react';
import {Link} from 'react-router';

// const TagItem = ({tag}) => (
//   <li className='tag-item'>
//     <Link to=''>{tag.name}</Link>
//   </li>
// );
//
// export default TagItem;


export default class TagItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {hovering: false};
  }

  toggleClose(){
    this.setState({hovering: !this.state.hovering});
  }

  showClose(){
    if(this.state.hovering){
      return(
        <i className="fa fa-times" aria-hidden="true"></i>
      );
    }
  }

  render(){
    return(
      <li onMouseEnter={() => this.toggleClose()}
          onMouseLeave={() => this.toggleClose()}
        className='tag-item'>
        <Link to=''>{this.props.tag.name}</Link>
        {this.showClose()}
      </li>
    );
  }
}
