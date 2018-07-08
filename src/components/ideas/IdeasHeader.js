import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import MdMoreVert from 'react-icons/lib/md/more-vert';
import '../../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActions from '../../actions/headerActions';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import Dropdown  from 'react-dropdown';
import SelectInput from '../common/SelectInput';
import FontAwesome from 'react-fontawesome';
import MdDone from 'react-icons/lib/md/done';
import ExpandLess from 'react-icons/lib/md/expand-less';
import ExpandMore from 'react-icons/lib/md/expand-more';

export class IdeasHeader extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      AddDiv: '',
      listOpen: false,
      errors: {}
    };

  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  updateHeaderVisibility = (header) => {
    this.props.actions.updateHeaderVisibilitySuccess(header);
  }

  render() {
    const { headers } = this.props;
    const { listOpen } = this.state;
    return (
      <tr className="ideas-header">
        { headers.map(header =>
          <Header header = { header } />
        )}
        <th className="headers-dropsown">
          <div className="dd-wrapper">
            <div className="dd-header"
              onClick={this.toggleList}
            >
            <div className="header-container">
              <div className="dd-header-title">Headers</div>
              {listOpen
                ? <ExpandLess name="angle-up" />
                : <ExpandMore name="angle-down" />
              }
            </div>
            </div>
            {listOpen && <ul className="dd-list">
              {
                headers.map((header) => (
                  <li
                    className="dd-list-item"
                    key={header.code}
                    onClick={
                      () => this.updateHeaderVisibility(header)
                    }
                  >
                    {header.title}
                    {
                      header.visible &&
                      <MdDone className="header-check" name="check"/>
                    }
                </li>
              ))}
            </ul>}
          </div>
        </th>
      </tr>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(IdeasHeader);
