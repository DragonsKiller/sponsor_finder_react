import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router";
import Button from '@material-ui/core/Button';
import MdUpdate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';

const IdeaColomn = ({ header, idea }) => {
  if (header.visible === true && header.code !== "name" && header.code !== "actions") {
    return (
      <td>{ idea[header.code] }</td>
    );
  } else {
    if (header.visible === true && header.code !== "name" && header.code === "actions") {
      return (
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
      );
    }
    return (null);
  }
}

export default IdeaColomn;
