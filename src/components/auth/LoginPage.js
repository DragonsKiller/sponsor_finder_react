import React from 'react';
import $ from 'jquery';
import TextInput from '../common/TextInput';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import '../../App.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  login = () => {
    const { email, password } = this.state;
    const request = { email, password };

    axios.post('http://localhost:3001/auth_trader', request ).then(result => {
      localStorage.setItem('user', JSON.stringify(result.data)),
      console.log(JSON.stringify(result.data)),
      this.props.router.push('/ideas')
    }).catch(error => {
      throw(error);
    });
    console.log(request);
  }

  render() {
    console.log(localStorage);
    return (
        <div className="modal-dialog">
            <div className="loginmodal-container">
              <h1>Login to Your Account</h1><br />
                <form>
                  <TextInput
                    name="email"
                    id="email"
                    type="email"
                    style={{marginRight: '5px'}}
                    placeholder="Email"
                    onChange={event => this.setState({email: event.target.value})}
                  />

                  <TextInput
                    name="password"
                    id="password"
                    type="password"
                    secureTextEntry={true}
                    password={true}
                    style={{marginRight: '5px'}}
                    placeholder="Password"
                    onChange={event => this.setState({password: event.target.value})}
                  />
                </form>
                  <br />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.login}
                  >
                      Sign in
                  </button>
            </div>
          </div>
    );

  }
}



export default LoginPage;
