import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ideaActions from '../../actions/ideaActions';
import IdeaForm from './IdeaForm';

export class ManageIdeaPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      idea: Object.assign({}, props.idea),
      errors: {}
    };
    this.updateIdeaState = this.updateIdeaState.bind(this);
    this.saveIdea = this.saveIdea.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.idea.id !== prevState.idea.id) {
      return {
        idea: nextProps.idea
      };
    }
    return null;
   }

  updateIdeaState(event) {
    const field = event.target.name;
    let idea = this.state.idea;
    idea[field] = event.target.value;
    return this.setState({ idea });
  }

  saveIdea(event) {
    event.preventDefault();
    this.props.actions.saveIdea(this.state.idea).then(() => {
      this.props.actions.loadIdeas().then(() => {
        this.context.router.push('/');
      });
    });
  }

  render() {
    return (
      <IdeaForm
        onChange = { this.updateIdeaState }
        onSave = { this.saveIdea }
        idea = { this.state.idea }
        errors = { this.state.errors }
      />
    );
  }
}

//Pull in the React Router context so router is available on this.context.router.
ManageIdeaPage.contextTypes = {
  router: PropTypes.object
};

function getIdeaById(ideas, id) {
  const idea = ideas.filter(idea => idea.id == id);
  if (idea) {
    return idea[0]; //since filter returns an array, have to grab the first.
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const ideaId = ownProps.params.id;

  let idea = {
      id: '', description: '', problem: '',
      industry: '', team: '', geographical_focus: '',
      requirements: '', next_steps: '', trader_id: ''
    };

  if (ideaId && state.ideas.length > 0) {
    idea = getIdeaById(state.ideas, ideaId);
  }
  return { idea };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(ideaActions, dispatch)
//   };
// }

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ideaActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageIdeaPage);
