import * as types from '../constants';
import axios from 'axios';

export function loadIdeasSuccess(ideas) {
  return { type: types.LOAD_IDEAS_SUCCESS, ideas };
}

export function createIdeaSuccess(idea) {
  return {type: types.CREATE_IDEA_SUCCESS, idea};
}

export function updateIdeaSuccess(idea) {
  return {type: types.UPDATE_IDEA_SUCCESS, idea};
}

export function deleteIdeaSuccess(id) {
  return {type: types.DELETE_IDEA_SUCCESS, id};
}

export function loadIdeas() {
  return function(dispatch) {
    return axios.get('http://localhost:3001/api/v1/ideas.json').then(ideas => {
      dispatch(loadIdeasSuccess(ideas.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveIdea(idea) {
  return function(dispatch) {
    return axios.post( 'http://localhost:3001/api/v1/ideas', { idea }).then(() => {
        dispatch(createIdeaSuccess(idea));
    }).catch(error => {
      throw(error);
    });
  };
}

export function editIdea(idea) {
  return function(dispatch) {
    return axios.put( `http://localhost:3001/api/v1/ideas/${idea.id}`, { idea }).then(() => {
      dispatch(updateIdeaSuccess(idea));
    }).catch(error => {
      throw(error);
    });
  };
}


export function deleteIdea(id) {
  return function(dispatch) {
    axios.delete( 'http://localhost:3001/api/v1/ideas/' + id ).then(() => {
      dispatch(deleteIdeaSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
}
