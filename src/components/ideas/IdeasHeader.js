import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
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

export class IdeasHeader extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      AddDiv: '',
      listOpen: false,
      header: Object.assign({}, props.header),
      errors: {}
    };

    this.addHeader = this.addHeader.bind(this);
    this.addCreateButton = this.addCreateButton.bind(this);
    this.addListHeaders = this.addListHeaders.bind(this);
    this.headersSelector = this.headersSelector.bind(this);
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  addHeader(event, header) {
    console.log('bef', header);
    header.visible = !header.visible;
    this.setState({ header });
    this.props.actions.addHeaderSuccess(this.state.header);
  }


  addListHeaders(event) {
    const { listOpen } = this.state;
    const { headers } = this.props;
    const AddDiv = <div className="dd-wrapper">
                    <div className="dd-header" onClick={() => this.toggleList()}>
                        <div className="dd-header-title">Headers</div>
                        {listOpen
                          ? <FontAwesome name="angle-up" size="2x"/>
                          : <FontAwesome name="angle-down" size="2x"/>
                        }
                    </div>
                     {listOpen && <ul className="dd-list">
                       {headers.map((header) => (
                         <li className="dd-list-item" key={header.code} onClick={() => this.addHeader(event, header)}>{header.title} {header.visible && <MdDone name="check"/>}</li>
                        ))}
                      </ul>}
                    </div>;
    this.setState({ AddDiv });
  }

  addCreateButton(event) {
    if(this.state.AddDiv === '') {
      const AddDiv = <MdAddCircle  size = {25} color="#99db27" onClick={ this.addListHeaders }/>
      this.setState({ AddDiv });
    } else {
      this.setState({AddDiv: ''});
    }
  }

  headersSelector(headers) {
    return headers.map(header => {
      return {
        key: header.code,
        title: header.title,
        selected: header.visible
      };
    });
  }

  render() {
    const { headers } = this.props;
    const { AddDiv } = this.state;
    return (
      <tr>
        { headers.map(header =>
          <Header header = { header } />
        )}
        <th>
          <MdMoreVert className="header-more-vert" size = {25} onClick={ this.addCreateButton }/>
          {AddDiv}
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
