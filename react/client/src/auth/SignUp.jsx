import React from 'react'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangePassConf = this.handleOnChangePassConf.bind(this)
    this.state = {
      username:"",
      email:"", 
      password:"", 
      passwordConfirmation:""
    }
  }

  signUp(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open("POST", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201) {
        const user = JSON.parse(request.responseText);
        this.props.onSignUp(user);
      }
    }
    const data = {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    }
    request.send(JSON.stringify(data));
  }

  handleOnChangeUsername(event) {
    this.setState({username: event.target.value})
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleOnChangePassConf(event) {
    this.setState({passwordConfirmation: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" onChange={this.handleOnChangeUsername} placeholder="Username" />
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <input type="password" onChange={this.handleOnChangePassConf}  placeholder="Password Confirmation" />

        <button onClick={this.signUp}>  Sign Up </button>
      </form>
    )
  }
}

export default SignUp