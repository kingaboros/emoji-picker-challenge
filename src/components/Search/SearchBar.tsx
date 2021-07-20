import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import * as searchStyle from './SearchBar.module.scss';

import * as classes from '../ChatInput/ChatInput.module.scss';

import strings from '../../themes/strings';

const SearchBar = (data: any) => {
  const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (e: any) => {
    const searchTerm = e.target.value;
    const newFilter = data.filter((value: any) => {
      return value.tags.includes(searchTerm);
    });
    setFilteredData(newFilter);
  };
  return (
    <div className-={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          onChange={handleFilter}
        />
        <AiOutlineSearch className={searchStyle.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
