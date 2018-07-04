import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ideaActions from '../../actions/ideaActions';
import IdeaColumn from './IdeaColumn';

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
    const { idea } = this.state;
    const { headers } = this.props;
    return (
      <tr>
        { headers.map(header =>
          <IdeaColumn
            header = { header }
            idea = { idea }
            onDelete = { this.deleteIdea }
            />
        )}
      </tr>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ideas: state.ideas,
    headers: state.headers
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ideaActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaRow);
