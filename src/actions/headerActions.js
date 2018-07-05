import * as types from '../constants';
import axios from 'axios';

export function updateHeaderVisibilitySuccess(header) {
  const newHeader = {...header, visible: !header.visible}
  return {type: types.UPDATE_HEADER_VISIBILITY_SUCCESS, newHeader};
}
