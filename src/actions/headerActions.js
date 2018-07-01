import * as types from '../constants';
import axios from 'axios';

export function deleteHeaderSuccess(header) {
  header.visible = false;
  return {type: types.DELETE_HEADER_SUCCESS, header};
}
