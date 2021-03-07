/*
 *
 * About reducers
 * make by phamthainb
 */
import { Reducer } from 'redux';
import * as types from './constants';
import { ActionsAbout, StoreAbout } from './types';

const initState: StoreAbout = {
  data: [],
  pagination: { page: 1, limit: 2, totalRow: 10 },
  search: '',
};

const reducersAbout: Reducer<StoreAbout, ActionsAbout> = (
  state = initState,
  actions: ActionsAbout,
) => {
  switch (actions.type) {
    case types.GET:
      return { ...state, data: actions.payload };
    case types.CHANGEPAGE:
      return { ...state, pagination: actions.payload };
    // case types.ERR_INTERNET_DISCONNECTED:
    //   return { ...state, pagination: actions.payload };
    case types.SAVE_CHANGE_SEARCH:
      return { ...state, search: actions.payload };
    default:
      return { ...state };
  }
};

export default reducersAbout;
