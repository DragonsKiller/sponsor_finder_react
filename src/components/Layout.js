import React from 'react';
import $ from 'jquery';

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bananasReceived: "" }
  }

  login () {
    const email = $("#email").val()
    const password = $("#password").val()
    const request = {"email": email, "password": password}

    console.log(request);
    $.ajax({
      url: "http://localhost:3001/auth_trader",
      type: "POST",
      data: request,
      dataType: "json",
      success: function (result) {
        console.log(result)
        localStorage.setItem("jwt", result.jwt)
      }
    });
  }

  render() {
    // return (
    //   <div className = "container-fluid">
    //     { this.props.children }
    //   </div>
    // );
    return (
      <div className="App">
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Ideas Sponsors Finder
        </h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
        <br />
      </div>
    );

  }
}

export default Layout;
