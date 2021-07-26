import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import * as searchStyle from './SearchBar.module.scss';

import strings from '../../themes/strings';

const json = require('../../emojisDb/emojis.json');

const SearchBar = (props: any) => {
  const [searchTerm, setSearchTerm] = useState(' ');

  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          // onChange={event => {
          //   setSearchTerm(event.target.value);
          // }}
        />
        <AiOutlineSearch className={searchStyle.searchIcon} />
      </div>
      <div>
        {[json]
          .filter((val: any) => {
            if (searchTerm === ' ') {
              return val;
            } else if (
              val.tags.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              console.log(searchTerm);
              return val;
            }
          })
          .map((val: any, key: any) => {
            return (
              <div>
                <p key={key.id}>{val.emoji}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
