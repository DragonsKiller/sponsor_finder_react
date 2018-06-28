import { combineReducers } from 'redux';
import ideas from './ideaReducer';

const rootReducer = combineReducers({
  ideas
});

export default rootReducer;
