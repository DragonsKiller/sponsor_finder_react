import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router";
import Button from '@material-ui/core/Button';
import MdUpdate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ideaActions from '../../actions/ideaActions';

export class IdeaRow extends React.Component {
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
     this.props.actions.deleteIdea(this.state.idea.id);
   }

  render() {
    const idea = this.state.idea;
    return (
      <tr>
        <td><Link to={`/ideas/${idea.id}`}>{ idea.name }</Link></td>
        <td>{ idea.description }</td>
        <td>{ idea.problem }</td>
        <td>{ idea.industry }</td>
        <td>{ idea.team }</td>
        <td>{ idea.geographical_focus }</td>
        <td>{ idea.requirements }</td>
        <td>{ idea.next_steps }</td>
        <td>{ idea.trader_id }</td>
        <td>
          <Link to={ `/ideas/${idea.id}/edit` }>
            <Button variant="fab" color="primary" aria-label="edit">
              <MdUpdate size={25}/>
            </Button>
          </Link>
          <Button variant="fab" color="secondary" aria-label="delete" onClick={ this.deleteIdea }>
            <MdDelete size={25}/>
          </Button>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ideas: state.ideas
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ideaActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaRow);
