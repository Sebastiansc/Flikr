import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }

  componentDidUpdate(){
    if (this.props.loggedIn) this.props.router.push('/home/main');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  displayErrors(){
    return (
      <ul>
        {this.props.errors.map((error,i) => <li key={i}>{error}</li>)}
      </ul>
    );
  }

  update(e, property){
    this.setState({[property]: e.target.value});
  }

  changeFormLink(){
    if(window.location.hash === '#/') {
      return (
        <div>
          <span>Dont have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/signup'>Sign up</Link>
          </span>
        </div>
      );
    } else {
      return(
        <div>
          <span>Alredy have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/'>Sign in</Link>
          </span>
        </div>
      );
    }
  }

  render(){
    return (
      <div className='signin-main'>
        <div className='signin-gradient'></div>
        <div className='signin'>
          <h1>{this.props.formType}</h1>
          {this.displayErrors()}

          <form onSubmit={ e => this.handleSubmit(e)}>
            <input
              type='text'
              value={this.state.username}
              id='username'
              placeholder='Enter your username'
              onChange={e => this.update(e, 'username')}>
            </input>

            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              onChange={ e => this.update(e, 'password') }>
            </input>

            <button>Submit</button>
          </form>

          {this.changeFormLink()}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
