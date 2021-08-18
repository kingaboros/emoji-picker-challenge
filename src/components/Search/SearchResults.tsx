import React from 'react';

import * as searchStyle from './SearchBar.module.scss';
import * as emojiStyle from '../EmojisList/EmojiList.module.scss';

const SearchResults = (props: any) => {
  return (
    <div className={searchStyle.searchResultsWrapper}>
      <h4 className={emojiStyle.iconCategoryHeading}>Search Results</h4>
      <div className={searchStyle.searchResults}>
        {props.data.map((item: any) =>
          item.map((emoji: any) => {
            return (
              <p key={emoji.id} className={emojiStyle.emojiIcons}>
                {emoji.emoji}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
