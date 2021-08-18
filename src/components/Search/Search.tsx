import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import * as searchStyle from './SearchBar.module.scss';
import * as emojiStyle from '../EmojisList/EmojiList.module.scss';
import * as emojiClasses from '../EmojisList/EmojiList.module.scss';

import strings from '../../themes/strings';

const Search = () => {
  const json = require('../../emojisDb/emojis.json');

  // const getSearchTerm = (event: any) => {
  //   searchKeyword(event.target.value);
  // };
  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          // value={searchTerm}
          // onChange={getSearchTerm}
        />

        <AiOutlineSearch className={searchStyle.searchIcon} />
      </div>
      <div className={searchStyle.searchResults}>
        <h4 className={emojiStyle.iconCategoryHeading}>Search Results</h4>
        <p className={emojiStyle.emojiIcons}>
          {Object.keys(json).map((categ: any) => {
            return (
              <div>
                <div>
                  <h4
                    key={categ.categ}
                    className={emojiClasses.iconCategoryHeading}
                  >
                    {categ}
                  </h4>

                  {json[categ].map((emoji: any) => {
                    return (
                      <p key={emoji.id} className={emojiClasses.emojiIcons}>
                        {emoji.emoji}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Search;
