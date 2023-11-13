import React from 'react';

import styles from './Search.module.scss';

import { SearchContext } from '../../App';

const Search = () => {
  const searchRef = React.useRef(null);

  function searchClear() {
    setSearchValue('');
    searchRef.current.focus();
  }

  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.root}>
      <input
        ref={searchRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
