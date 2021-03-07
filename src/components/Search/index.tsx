/**
 *
 * Search
 * make by phamthainb
 */
import { changeSearch } from '@containers/About/store/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function Search() {
  const [name, setName] = useState('');

  const onChange = (event: { target: any }) => {
    var target = event.target;
    var value = target.value;
    setName(value);
  };

  const dispatch = useDispatch();

  const onSearch = (name: string) => {
    dispatch(changeSearch(name));
  };

  return (
    <SearchStype>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSearch(name);
        }}
      >
        <input
          type="text"
          placeholder="user name"
          value={name}
          onChange={onChange}
        />
        <button
          type="submit"
          //   onClick={() => {
          //     onSearch(name);
          //   }}
        >
          Search
        </button>
      </form>
    </SearchStype>
  );
}

const SearchStype = styled.div``;

export default Search;
