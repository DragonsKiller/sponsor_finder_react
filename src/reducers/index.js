import { combineReducers } from 'redux';
import ideas from './ideaReducer';
import headers from './headersReducer';

const rootReducer = combineReducers({
  ideas,
  headers,
});

export default rootReducer;
