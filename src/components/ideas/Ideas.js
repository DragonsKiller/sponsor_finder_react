import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ideaActions from '../../actions/ideaActions';
import {browserHistory} from 'react-router';
import IdeasList from './IdeasList';
import axios from 'axios';

class Ideas extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddIdeaPage = this.redirectToAddIdeaPage.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadIdeas();
  }

  redirectToAddIdeaPage() {
    browserHistory.push('/ideas/new');
  }

  render() {
    const { ideas } = this.props;
    return (
      <div>
        <h1>Ideas</h1>
        <input type="submit"
               value="Add Idea"
               className="btn btn-primary"
               onClick={this.redirectToAddIdeaPage}
        />
      <IdeasList ideas = { ideas }/>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ideas: state.ideas
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ideaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ideas);
