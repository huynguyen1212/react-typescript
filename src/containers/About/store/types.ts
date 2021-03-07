/*
 *
 * About types
 * make by phamthainb
 */
import { type } from 'os';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// export const {
//   // select the array of user ids

//   selectIds: selectUserIds,

//   // select the dictionary of user entities

//   selectEntities: selectUserEntities,

//   // select the array of users

//   selectAll: selectAllUsers,

//   // select the total user count

//   selectTotal: selectUserTotal,
// } = fromUser.adapter.getSelectors(selectUserState);

export type AboutItem = {
  id: number;
  name: string;
  image: string;
};

export type PaginationType = {
  page: number;
  limit: number;
  totalRow: number;
};
export interface StoreAbout {
  data: AboutItem[];
  pagination: PaginationType;
  search: string;
}

export type ActionsAbout = ActionType<typeof actions>;
