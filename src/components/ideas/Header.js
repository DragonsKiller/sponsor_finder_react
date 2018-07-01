import React from "react"
import PropTypes from "prop-types"

const Header = ({ header }) => {
  if (header.visible === true) {
    return (
      <th>{header.title}</th>
    );
  } else {
    return (null);
  }
}

export default Header;
