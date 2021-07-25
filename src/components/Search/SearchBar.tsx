import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import * as searchStyle from './SearchBar.module.scss';

import strings from '../../themes/strings';

const json = require('../../emojisDb/emojis.json');

const SearchBar = (props: any) => {
  const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e: any) => {
    const searchTerm = e.target.value;
    const jsonArr = Object.keys(json);
    const newFilter: any = jsonArr.filter((value: any) => {
      return value.description.includes(searchTerm);
    });
    console.log(searchTerm);
    setFilteredData(newFilter);
  };
  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          onChange={handleFilter}
        />
        <AiOutlineSearch className={searchStyle.searchIcon} />
      </div>
      <div>
        {filteredData.map((value: any, description: any) => {
          return (
            <div>
              <p key={value.id}>{value.emoji}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
