import * as types from '../constants';
import initialState from './initialState';

export default function headersReducer(state = initialState.visibleHeaders, action) {
  switch(action.type) {
    case types.UPDATE_HEADER_VISIBILITY_SUCCESS:
      const newState = [...state];
      return [
        ...newState.filter(header => header.code !== action.newHeader.code),
        action.newHeader,
      ];

    default:
      return state;
  }
}
