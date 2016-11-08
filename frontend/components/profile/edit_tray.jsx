import React from 'react';

class EditTray extends React.Component{
  constructor(props){
    super(props);
    this.state = ({bottom: 101});
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let bottom;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80){
      // you're at the bottom of the page
      bottom = 101;
    } else {
      bottom = 0;
    }


    this.setState({
      bottom: bottom
    });
  }

  render(){
    if(this.props.photo.id && !this.props.adding) {
      return(
        <div className={`edit-tray`} style={{bottom: this.state.bottom}}>
          <div className='clear-select'>
            <span>Selected</span>
            <span onClick={() => this.props.setEditId(undefined)}>
              Clear selection
            </span>
          </div>
          <div className='tray-image-container'>
            <figure
              style={{backgroundImage: `url('${this.props.photo.feed_url}')`}}>

            </figure>
          </div>
          <ul className='edit-options'>
            <li><i className="fa fa-lock" aria-hidden="true"></i> Privacy</li>
            <li onClick={() => this.props.toggleModal()}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                 Edit
            </li>
            <li onClick={() => this.props.togglePhotoAdd()}>
              <i className="fa fa-plus-square" aria-hidden="true"></i>
             Add to Album
           </li>
           <li className='delete'>
              <i className="fa fa-trash-o" aria-hidden="true"
                onClick={() => this.props.deletePhoto(this.props.photo.id)}>
              </i>
              Delete
            </li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default EditTray;
