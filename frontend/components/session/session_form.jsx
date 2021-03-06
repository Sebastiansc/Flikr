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
    if (this.props.loggedIn) this.props.router.push('/home');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(e, property){
    this.setState({[property]: e.target.value});
  }

  changeFormLink(){
    if(window.location.hash === '#/signin') {
      return (
        <div className="signin-bottom-row">
          <span>Dont have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/signup'>Sign up</Link>
          </span>
        </div>
      );
    } else {
      return(
        <div className="signin-bottom-row">
          <span>Alredy have an account?</span>
          <span className='entry-form-change-link' >
            <Link to='/signin'>Sign in</Link>
          </span>
        </div>
      );
    }
  }

  displayErrors(){
    if(this.props.errors.length > 0){
      return (
        <ul className='signin-errors'>
          {this.props.errors.map((error,i) => <li key={i}>{error}</li>)}
        </ul>
      );
    }
  }

  render(){
    return (
      <div>
        <div className='sign-in-images'>
          <Link to='/'>
            <img src='https://res.cloudinary.com/flikr/image/upload/v1478498324/logo3_vehkaq.svg'></img>
            <img src='https://res.cloudinary.com/flikr/image/upload/v1478498332/camara-lens-1_y8v7pb.svg'></img>
          </Link>
        </div>
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
            <div className="signin-bottom-row">
              <span>Feeling Lazy?</span>
              <a
                className='entry-form-change-link'
                onClick={ () => this.props.login(
                {username: "guest",
                password: "password"})}>
                Guest Sign in
              </a>
            </div>

            {this.changeFormLink()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
