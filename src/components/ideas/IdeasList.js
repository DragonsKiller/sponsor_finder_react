import React from "react"
import PropTypes from "prop-types"
import IdeasHeader from './IdeasHeader';
import IdeaRow from './IdeaRow';
import { Table } from 'reactstrap';
import { Link } from "react-router";

const IdeasList = ({ ideas, headers }) => {
  return (
    <Table>
      <thead>
        <IdeasHeader headers = { headers }/>
      </thead>
      <tbody>
        { ideas.map((idea, key) =>
        <IdeaRow key = { idea.id } idea = { idea } ideaKey = { key }/>
        )}
      </tbody>
    </Table>
  );
};


export default IdeasList;
