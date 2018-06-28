import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ideaActions from '../../actions/ideaActions';
import { Link } from "react-router";
import Button from '@material-ui/core/Button';

export class Idea extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      idea: Object.assign({}, props.idea),
      errors: {}
    };
    this.deleteIdea = this.deleteIdea.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.idea.id !== prevState.idea.id) {
      return {
        idea: nextProps.idea
      };
    }
    return null;
   }

   deleteIdea(event) {
     event.preventDefault();
     this.props.actions.deleteIdea(this.state.idea.id).then(() => {
       this.context.router.push('/')
     });
   }

  render() {
    const idea = this.state.idea;
    return (
      <div>
        <h1><Link to={`/ideas/${idea.id}`}>{ idea.name }</Link></h1>
        <p>Description: { idea.description }</p>
        <p>Problem: { idea.problem }</p>
        <p>Industry: { idea.industry }</p>
        <p>Team: { idea.team }</p>
        <p>Geographical focus: { idea.geographical_focus }</p>
        <p>Requirements: { idea.requirements }</p>
        <p>Next steps: { idea.next_steps }</p>
        <p>Trader: { idea.trader_id }</p>
        <p>
          <Link to = { `/` }>
            <Button variant="contained" size="medium" color="green">
              Back
            </Button>
          </Link>
          <Link to = { `/ideas/${idea.id}/edit` }>
            <Button variant="contained" size="medium" color="primary">
              Edit
            </Button>
          </Link>
          <Button variant="contained" size="medium" color="secondary" onClick={ this.deleteIdea }>
            Delete
          </Button>
        </p>
      </div>
    );
  }
}



//Pull in the React Router context so router is available on this.context.router.
Idea.contextTypes = {
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
  const ideaId = ownProps.params.id; // from the path `/idea/:id`

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

export default connect(mapStateToProps, mapDispatchToProps)(Idea);
