import React from "react"
import PropTypes from "prop-types"
import Header from './Header'

const IdeasHeader = ({ headers }) => {
  return (
    <tr>
      { headers.map(header =>
        <Header header = { header } />
      )}
    </tr>
  );
}

export default IdeasHeader
