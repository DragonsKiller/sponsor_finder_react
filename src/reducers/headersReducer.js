import * as types from '../constants';
import initialState from './initialState';

export default function headersReducer(state = initialState.visibleHeaders, action) {
  switch(action.type) {
    case types.DELETE_HEADER_SUCCESS:
      return [
        ...state.filter(header => header.code !== action.header.code),
        Object.assign({}, action.header)
      ];

    case types.ADD_HEADER_SUCCESS:
      return [
        ...state.filter(header => header.code !== action.header.code),
        Object.assign({}, action.header)
      ];

    default:
      return state;
  }
}
