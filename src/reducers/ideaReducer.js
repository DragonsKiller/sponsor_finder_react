import * as types from '../constants';
import initialState from './initialState';

export default function ideaReducer(state = initialState.ideas, action) {
  switch(action.type) {
    case types.LOAD_IDEAS_SUCCESS:
      return action.ideas;

    case types.CREATE_IDEA_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.idea)
      ];

    case types.UPDATE_IDEA_SUCCESS:
      return [
        ...state.filter(idea => idea.id !== action.idea.id),
        Object.assign({}, action.idea)
      ];

    case types.DELETE_IDEA_SUCCESS:
      console.log('case');
      const ideas =  removeById(state, action.id);
      return ideas;

    default:
      return state;
  }
}

const removeById = (state = initialState.ideas, id) => {
  const ideas = state.filter(idea => idea.id !== id);
  return ideas;
}
