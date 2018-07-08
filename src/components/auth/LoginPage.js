import React from 'react';
import $ from 'jquery';
import TextInput from '../common/TextInput';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

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
      <div className="App">
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Ideas Sponsors Finder
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <TextInput
            name="email"
            id="email"
            type="email"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <TextInput
            name="password"
            id="password"
            type="password"
            secureTextEntry={true}
            password={true}
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
        </form>
          <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.login}
          >
              Login
          </button>
        <br />
      </div>
    );

  }
}

export default LoginPage;
