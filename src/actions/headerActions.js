import * as types from '../constants';
import axios from 'axios';

export function deleteHeaderSuccess(header) {
  header.visible = !header.visible;
  return {type: types.DELETE_HEADER_SUCCESS, header};
}

export function addHeaderSuccess(header) {
  return {type: types.ADD_HEADER_SUCCESS, header};
}
