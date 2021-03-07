/*
 *
 * About actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInter } from '@api/axios';
import { AboutItem, PaginationType } from './types';
interface Props {
  page: number;
  limit: number;
  search: string;
}

export const getDataAbout = (val: AboutItem[]) => action(types.GET, val);

export const getDataAboutResquest = ({ page, limit, search }: Props) => {
  return (dispatch: any) => {
    // console.log(page, limit);
    console.log(page, limit, search);
    
    requestInter({
      method: 'GET',
      url: `/about?_page=${page}&_limit=${limit}&q=${search}`,
    }).then(res => {
      dispatch(getDataAbout(res.data));
    });
    // .catch(err => console.log(err));
  };
};

export const changePage = (val: PaginationType) =>
  action(types.CHANGEPAGE, val);

export const changeSearch = (val: string) => {
  return action(types.SAVE_CHANGE_SEARCH, val);
};
