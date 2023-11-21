import React from 'react';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector((state: any) => state.filter.searchValue);
  const searchRef = React.useRef<HTMLInputElement>(null);

  function searchClear() {
    dispatch(setSearchValue(''));

    searchRef.current?.focus();
  }

  function searchData(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchValue(e.target.value));
  }

  return (
    <div className={styles.root}>
      <input
        ref={searchRef}
        value={searchValue}
        onChange={(e) => searchData(e)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue ? (
        <svg
          className={styles.clearIcon}
          onClick={() => searchClear()}
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      ) : null}
    </div>
  );
};

export default Search;
