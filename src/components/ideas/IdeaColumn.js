import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router";
import Button from '@material-ui/core/Button';
import MdUpdate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';

const IdeaColumn = ({ header, idea, onDelete }) => {
  if (header.visible === true && header.code === "name") {
    return (
      <td><Link to={`/ideas/${idea.id}`}>{ idea.name }</Link></td>
    );
  } else {
    if (header.visible === true && header.code === "actions") {
      return (
        <td>
          <Link to={ `/ideas/${idea.id}/edit` }>
            <Button variant="fab" color="primary" aria-label="edit">
              <MdUpdate size={25}/>
            </Button>
          </Link>
          <Button variant="fab" color="secondary" aria-label="delete" onClick={ onDelete }>
            <MdDelete size={25}/>
          </Button>
        </td>
      );
    } else {
      if (header.visible === true && header.code !== "name" && header.code !== "actions") {
        return (
          <td>{ idea[header.code] }</td>
        );
      } else {
        return (null);
      }
    }
  }
}

export default IdeaColumn;
