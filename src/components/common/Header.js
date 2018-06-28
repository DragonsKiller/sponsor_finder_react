import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to = "/ideas" activeClassName = "active">Ideas</IndexLink>
    </nav>
  );
};

export default Header;
