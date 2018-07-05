import React from "react";
import Ideas from "../ideas/Ideas";

class Welcome extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: 'login',
    };
  }

  changePage(newPage) {
    this.setState({
      page: Ideas
    });
  };

  render() {
    switch(this.state.page) {
     case 'login':
      return <Login changePage={this.changePage}/>
     case 'signup':
      return <Signup changePage={this.changePage}/>
     case 'edit':
      return <Edit changePage={this.changePage}/>
    }
  }
}

export default Welcome;
