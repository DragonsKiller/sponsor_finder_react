import React from "react"
import PropTypes from "prop-types"
import IdeasHeader from './IdeasHeader';
import IdeaRow from './IdeaRow';
import { Table } from 'reactstrap';

const IdeasList = ({ ideas }) => {
  return (
    <Table>
      <thead>
        <IdeasHeader />
      </thead>
      <tbody>
        { ideas.map(idea =>
          <IdeaRow key = { idea.id } idea = { idea }/>
        )}
      </tbody>
    </Table>
  );
};


export default IdeasList;
