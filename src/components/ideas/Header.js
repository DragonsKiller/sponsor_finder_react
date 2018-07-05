import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import MdDelete from 'react-icons/lib/md/cancel';
import '../../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from '../../actions/headerActions';

export class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {}
    };

    this.deleteHeader = this.deleteHeader.bind(this);
  }

  deleteHeader(event) {
    event.preventDefault();
    this.props.actions.updateHeaderVisibilitySuccess(this.props.header);
  }

  render() {
    const { header } = this.props;
    if (header.visible === true) {
      return (
        <th>
          <div className="idea-header">
            { header.title }
            <MdDelete className="headerDelete" size={20} color="#f3005a" onClick={ this.deleteHeader }/>
          </div>
        </th>
      );
    } else {
      return (null);
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    headers: state.headers
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(headerActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
