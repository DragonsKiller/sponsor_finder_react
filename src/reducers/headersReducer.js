import * as types from '../constants';
import initialState from './initialState';

export default function headersReducer(state = initialState.visibleHeaders, action) {
  switch(action.type) {
  
    default:
      return state;
  }
}

const removeById = (state = initialState.ideas, id) => {
  const ideas = state.filter(idea => idea.id !== id);
  return ideas;
}
