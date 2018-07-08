import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ideaActions from '../../actions/ideaActions';
import {browserHistory} from 'react-router';
import IdeasList from './IdeasList';
import axios from 'axios';
import SignOut from 'react-icons/lib/fa/sign-out';
import Button from '@material-ui/core/Button';

class Ideas extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadIdeas();
  }

  redirectToAddIdeaPage = () => {
    browserHistory.push('/ideas/new');
  }

  logout = () => {
    localStorage.clear();
    browserHistory.push('/login');
  }

  render() {
    const { ideas } = this.props;
    const { headers } = this.props;
    return (
      <div>
        <div className="menu">
          <h1>Ideas</h1>
          <div className="menu-button">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.logout}
            >
              <SignOut size={20} />
            </Button>
          </div>
        </div>

        <input type="submit"
               value="Add Idea"
               className="btn btn-primary"
               onClick={this.redirectToAddIdeaPage}
        />
      <IdeasList ideas = { ideas } headers = { headers }/>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ideas: state.ideas,
    headers: state.headers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ideaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ideas);
