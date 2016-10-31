import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
  }

  componentDidUpdate(){
    if (this.props.loggedIn) this.props.router.push("/");
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

  oppositePath(){
    if(window.location.hash === "#/signup"){
      return "#/login";
    } else { return "#/signup"; }
  }

  navLink(){
    return (
      <Link to={this.oppositePath()}>
        {this.oppositePath() === '#/signup' ? "Log In" : "Sign Up"}
      </Link>
    );
  }


  render(){
    return (
      <div>
        <h1>{this.props.formType}</h1>
        {this.displayErrors()}

        <form onSubmit={ e => this.handleSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={this.state.username}
            id="username"
            onChange={e => this.update(e, "username")}>
          </input>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={ e => this.update(e, "password") }>
          </input>

          <button>Submit</button>
        </form>

        {this.navLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
