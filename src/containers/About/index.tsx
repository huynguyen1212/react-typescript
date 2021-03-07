/*
 *
 * About
 * make by phamthainb
 */

import React, { memo, useEffect, useState } from 'react';
import ErrorBound from '@components/ErrorBound';
import useInjectReducer from '@redux/useInjectReducer';
import reducersAbout from './store/reducers';
import WrapAbout from './style/index';
import Child from './style/child';
// import { requestInter } from '@api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, getDataAboutResquest } from './store/actions';
import { selectAboutStore } from './store/selecters';
import { AboutItem, PaginationType, StoreAbout } from './store/types';
import Pagination from '@components/Pagination';
import Search from '@components/Search';

interface Props {}

// eslint-disable-next-line
function About({}: Props) {
  useInjectReducer('About', reducersAbout);

  // const [state, setstate] = useState('success');
  const {
    data,
    pagination,
    search,
  }: {
    data: AboutItem[];
    pagination: PaginationType;
    search: string;
  } = useSelector(selectAboutStore);

  const dispatch = useDispatch();

  useEffect(() => {
    const page: number = pagination.page;
    const limit: number = pagination.limit;

    // const name: string = data.name;
    dispatch(getDataAboutResquest({ page, limit, search }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // dispatch(getDataAboutSearch({ name }));
  }, [pagination, search]);

  useEffect(() => {
    if (search && data.length < 1) {
      alert('k có');
    }
  }, [data]);

  const list = data.map((value: AboutItem, index: number) => (
    <Child>
      <p className="name">{value.name}</p>
      <img className="image" alt="#" src={value.image} />
    </Child>
  ));

  return (
    <ErrorBound>
      {/* {state} */}
      <Search />
      <WrapAbout>{list}</WrapAbout>
      <Pagination
        pagination={{ ...pagination }}
        onPageChange={page =>
          dispatch(changePage({ ...pagination, page: page }))
        }
      />
    </ErrorBound>
  );
}
export default memo(About);
