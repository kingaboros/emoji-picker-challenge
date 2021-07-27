import React from 'react';
import * as searchStyle from './SearchBar.module.scss';
import * as emojiStyle from '../EmojisList/EmojiList.module.scss';

const SearchResults = (props: any) => {
  return (
    <div className={searchStyle.searchResults}>
      <h4 className={emojiStyle.iconCategoryHeading}>Search Results</h4>
      <p className={emojiStyle.emojiIcons} results={props.state}></p>
    </div>
  );
};

export default SearchResults;
