import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import * as searchStyle from './SearchBar.module.scss';

import strings from '../../themes/strings';

const json = require('../../emojisDb/emojis.json');

const SearchBar = (props: any) => {
  console.log(props);

  const getSearchTerm = (event: any) => {
    props.searchKeyword(event.target.value);
  };
  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          value={props.term}
          onChange={getSearchTerm}
        />

        <AiOutlineSearch className={searchStyle.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
